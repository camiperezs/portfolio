import random
import os
import sys
from lienzo import CIELOS, Lienzo, hexa, hoja, paisaje, seigaiha

W, H = 320, 180
VIGA_Y = 100
SUELO_Y = 106

BASE = {
    'dia': {
        'viga': '#4a2a1a', 'viga-luz': '#6e3f22', 'viga-sombra': '#26120c',
        'reja': '#6e3f22', 'poste': '#5a3420', 'washi': '#e6d2a6', 'washi-fibra': '#dcc596', 'washi-luz': '#f1e5ca',
        'oro': '#eaaa00', 'farol': '#a8431f', 'farol-linea': '#6e2a16',
        'rama': '#3a140a', 'hoja': '#d9741f', 'hoja2': '#ee9a2c', 'hoja-suelo': '#c4602e',
        'madera-a': '#8a5a3a', 'madera-b': '#7e5032', 'madera-junta': '#5a3420',
        'tatami-a': '#cdb07c', 'tatami-b': '#c2a46f', 'tatami-linea': '#b0925e', 'heri': '#6e2a16', 'zocalo': '#4a2a1a',
        'pared': '#e3be82', 'pared-sombra': '#d6ab6a', 'sombra': '#d1a362', 'sombra-suelo': '#704830',
        'patron-a': '#d9b077', 'patron-b': '#d2a76b', 'patron-linea': '#c49660', 'marco': '#4a2a1a',
        'andon': '#f1e5ca', 'halo': None,
    },
    'noche': {
        'viga': '#1d0d09', 'viga-luz': '#2e160d', 'viga-sombra': '#0f0607',
        'reja': '#26120c', 'poste': '#1d0d09', 'washi': '#4a2a1a', 'washi-fibra': '#432517', 'washi-luz': '#a8652a',
        'oro': '#eaaa00', 'farol': '#f2c84b', 'farol-linea': '#d9741f',
        'rama': '#140810', 'hoja': '#6e2a16', 'hoja2': '#5a2412', 'hoja-suelo': '#4a1a0e',
        'madera-a': '#3a1d10', 'madera-b': '#341a0e', 'madera-junta': '#24100a',
        'tatami-a': '#5e4429', 'tatami-b': '#553d25', 'tatami-linea': '#4a3520', 'heri': '#26120c', 'zocalo': '#140810',
        'pared': '#2a130c', 'pared-sombra': '#1d0d09', 'sombra': '#4a2414', 'sombra-suelo': '#5a2e18',
        'patron-a': '#2a0e25', 'patron-b': '#2f1029', 'patron-linea': '#3a0f34', 'marco': '#140810',
        'andon': '#f2c84b', 'halo': '#5a2a12',
    },
}

AMBIENTES = {
    'sobre-mi': {'dia': {}, 'noche': {}},
    'tecnologias': {
        'dia': {'washi': '#e9d7ad'},
        'noche': {'washi': '#9c6230', 'washi-fibra': '#915a2c', 'tatami-a': '#6e4a2e', 'tatami-b': '#64432a', 'tatami-linea': '#573a24', 'halo': '#6e3a18'},
    },
    'trabajo': {
        'dia': {},
        'noche': {'madera-a': '#2a130c', 'madera-b': '#24100a', 'madera-junta': '#160a07', 'halo': '#4a1a30'},
    },
    'contacto': {
        'dia': {'washi': '#ecd9ae'},
        'noche': {'washi': '#2e160d', 'washi-fibra': '#2a140c', 'halo': '#6e3a18'},
    },
}


def paleta(ambiente, tema):
    datos = dict(BASE[tema])
    datos.update(AMBIENTES.get(ambiente, {}).get(tema, {}))
    return {k: (hexa(v) if v else None) for k, v in datos.items()}


def pared_lisa(l, t, y1):
    for y in range(y1):
        for x in range(W):
            d = min(x, W - 1 - x, y)
            c = t['pared']
            if d < 4 or (d < 10 and (x + y) % 2 == 0):
                c = t['pared-sombra']
            l.punto(x, y, c)


def pared_shoji(l, t, y1):
    rnd = random.Random(5)
    for y in range(y1):
        for x in range(W):
            c = t['washi-fibra'] if rnd.random() < 0.05 else t['washi']
            if x % 20 == 0 or y % 24 == 0:
                c = t['reja']
            if x % 106 in (0, 1, 2, 3):
                c = t['poste']
            l.punto(x, y, c)


def pared_fusuma(l, t, y1):
    tema = {'a': t['patron-a'], 'b': t['patron-b'], 'linea': t['patron-linea']}
    teja = seigaiha(tema)
    for y in range(y1):
        for x in range(W):
            l.punto(x, y, teja.p[y % teja.h][x % teja.w])
    for px in range(0, W + 1, 64):
        l.rect(px - 1, 0, 3, y1, t['marco'])
        l.rect(px + 54, 48, 3, 3, t['marco'])
        l.punto(px + 55, 49, t['oro'])
    l.rect(0, 0, W, 2, t['marco'])


def viga(l, t, y):
    for x in range(W):
        l.punto(x, y, t['viga-luz'])
        for yy in range(y + 1, y + 5):
            l.punto(x, yy, t['viga'])
        l.punto(x, y + 5, t['viga-sombra'])


def suelo_tatami(l, t, y0):
    l.rect(0, y0, W, 2, t['zocalo'])
    for y in range(y0 + 2, H):
        for x in range(W):
            c = t['tatami-a'] if y % 2 == 0 else t['tatami-b']
            if (x + (y // 2) * 4) % 8 == 0:
                c = t['tatami-linea']
            if x % 96 in (0, 1):
                c = t['heri']
            l.punto(x, y, c)


def suelo_madera(l, t, y0):
    l.rect(0, y0, W, 2, t['zocalo'])
    for y in range(y0 + 2, H):
        fila = (y - y0 - 2) // 5
        for x in range(W):
            c = t['madera-a'] if fila % 2 == 0 else t['madera-b']
            if (y - y0 - 2) % 5 == 4:
                c = t['madera-junta']
            if (x + fila * 37) % 74 == 0:
                c = t['madera-junta']
            l.punto(x, y, c)


def halo(l, t, cx, cy, r):
    if not t['halo']:
        return
    for y in range(cy - r, cy + r):
        for x in range(cx - r, cx + r):
            if 0 <= x < W and 0 <= y < H and (x - cx) ** 2 + (y - cy) ** 2 <= r * r and (x + y) % 2 == 0:
                l.punto(x, y, t['halo'])


def rama(l, t):
    trazo = [(320, 16), (300, 18), (286, 18), (272, 20), (256, 17), (238, 22), (220, 20), (204, 26)]
    for (x1, y1), (x2, y2) in zip(trazo, trazo[1:]):
        pasos = max(abs(x2 - x1), abs(y2 - y1))
        for s in range(pasos + 1):
            x = round(x1 + (x2 - x1) * s / pasos)
            y = round(y1 + (y2 - y1) * s / pasos)
            l.rect(x, y, 2, 2 if x > 240 else 1, t['rama'])
    for i, (x, y) in enumerate([(262, 10), (250, 22), (240, 12), (226, 26), (214, 14), (206, 28), (276, 24), (232, 6), (292, 10), (304, 22)]):
        hoja(l, x, y, t['hoja'] if i % 3 else t['hoja2'], t['rama'])


def farol_colgante(l, t, lx):
    halo(l, t, lx + 5, 23, 20)
    l.rect(lx + 5, 0, 1, 14, t['rama'])
    l.rect(lx, 14, 11, 2, t['rama'])
    l.rect(lx - 1, 16, 13, 14, t['farol'])
    for yy in range(18, 30, 3):
        l.rect(lx - 1, yy, 13, 1, t['farol-linea'])
    l.rect(lx, 30, 11, 2, t['rama'])
    l.rect(lx + 5, 32, 1, 5, t['oro'])


def shoji_lateral(l, t, x0):
    l.rect(x0, 0, W - x0, H, t['reja'])
    for y in range(0, H, 22):
        for x in range(x0 + 3, W, 12):
            l.rect(x, y + 3, 10, 19, t['washi-luz'])


def sombra_reja(l, t, x0, y0, y1):
    for k in range(4):
        base = x0 + k * 24
        for y in range(y0, y1):
            xi = base + (y - y0) // 2
            color = t['sombra-suelo'] if y >= SUELO_Y else t['sombra']
            for x in range(xi, xi + 12):
                if (x + y) % 2 == 0 and x < 282:
                    l.punto(x, y, color)


def hojas_suelo(l, t, puntos):
    for x, y in puntos:
        hoja(l, x, y, t['hoja-suelo'], t['hoja-suelo'])


def andon(l, t, x, y):
    halo(l, t, x + 6, y + 10, 26)
    l.rect(x, y, 13, 2, t['rama'])
    l.rect(x + 1, y + 2, 11, 16, t['andon'])
    for yy in range(y + 2, y + 18):
        l.punto(x + 1, yy, t['rama'])
        l.punto(x + 11, yy, t['rama'])
        l.punto(x + 6, yy, t['reja'])
    l.rect(x + 1, y + 9, 11, 1, t['reja'])
    l.rect(x, y + 18, 13, 2, t['rama'])
    l.rect(x + 1, y + 20, 2, 4, t['rama'])
    l.rect(x + 10, y + 20, 2, 4, t['rama'])


def componer(ambiente, tema):
    t = paleta(ambiente, tema)
    l = Lienzo(W, H)
    if ambiente == 'sobre-mi':
        pared_lisa(l, t, VIGA_Y)
        viga(l, t, VIGA_Y)
        suelo_madera(l, t, SUELO_Y)
        shoji_lateral(l, t, 286)
        sombra_reja(l, t, 196, 60, H)
        farol_colgante(l, t, 236)
        rama(l, t)
        hojas_suelo(l, t, [(206, 160), (224, 168), (244, 158), (262, 170)])
    elif ambiente == 'tecnologias':
        pared_shoji(l, t, VIGA_Y)
        viga(l, t, VIGA_Y)
        suelo_tatami(l, t, SUELO_Y)
        farol_colgante(l, t, 240)
        andon(l, t, 270, 128)
    elif ambiente == 'trabajo':
        pared_fusuma(l, t, VIGA_Y)
        viga(l, t, VIGA_Y)
        suelo_madera(l, t, SUELO_Y)
        sombra_reja(l, t, 200, SUELO_Y, H)
        farol_colgante(l, t, 244)
        hojas_suelo(l, t, [(214, 164), (236, 172), (258, 160)])
    elif ambiente == 'contacto':
        pared_shoji(l, t, VIGA_Y)
        vista = paisaje(CIELOS[tema], tema == 'noche')
        for y in range(2, VIGA_Y):
            for x in range(216, 284):
                l.punto(x, y, vista.p[y + 18][x + 6])
        l.rect(212, 0, 4, VIGA_Y, t['poste'])
        l.rect(282, 0, 4, VIGA_Y, t['poste'])
        viga(l, t, VIGA_Y)
        suelo_tatami(l, t, SUELO_Y)
        shoji_lateral(l, t, 286)
        andon(l, t, 252, 132)
        rama(l, t)
    return l


def inicio(tema):
    noche = tema == 'noche'
    l = paisaje(CIELOS[tema], noche, tx=40)
    rama(l, paleta('sobre-mi', tema))
    return l


def generar(destino):
    os.makedirs(destino, exist_ok=True)
    for tema in ('dia', 'noche'):
        imagenes = {'inicio': inicio(tema)}
        imagenes.update({ambiente: componer(ambiente, tema) for ambiente in AMBIENTES})
        for nombre, lienzo in imagenes.items():
            with open(os.path.join(destino, f'{nombre}-{tema}.png'), 'wb') as archivo:
                archivo.write(lienzo.png())


if __name__ == '__main__':
    raiz = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
    generar(sys.argv[1] if len(sys.argv) > 1 else os.path.join(raiz, 'public', 'ambientes'))
