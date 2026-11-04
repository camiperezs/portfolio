import math
import random
import struct
import zlib


def hexa(c):
    c = c.lstrip('#')
    return (int(c[0:2], 16), int(c[2:4], 16), int(c[4:6], 16), 255)


VACIO = (0, 0, 0, 0)


class Lienzo:
    def __init__(self, w, h, fondo=VACIO):
        self.w = w
        self.h = h
        self.p = [[fondo] * w for _ in range(h)]

    def punto(self, x, y, c):
        if 0 <= x < self.w and 0 <= y < self.h:
            self.p[y][x] = c

    def rect(self, x, y, w, h, c):
        for yy in range(y, y + h):
            for xx in range(x, x + w):
                self.punto(xx, yy, c)

    def circulo(self, cx, cy, r, c):
        for yy in range(int(cy - r) - 1, int(cy + r) + 2):
            for xx in range(int(cx - r) - 1, int(cx + r) + 2):
                if (xx - cx) ** 2 + (yy - cy) ** 2 <= r * r:
                    self.punto(xx, yy, c)

    def png(self):
        raw = b''.join(b'\x00' + bytes(v for px in fila for v in px) for fila in self.p)

        def chunk(t, c):
            return struct.pack('>I', len(c)) + t + c + struct.pack('>I', zlib.crc32(t + c) & 0xffffffff)

        cabecera = struct.pack('>IIBBBBB', self.w, self.h, 8, 6, 0, 0, 0)
        return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', cabecera) + chunk(b'IDAT', zlib.compress(raw, 9)) + chunk(b'IEND', b'')


def bandas(lienzo, colores, y0, y1):
    alto = (y1 - y0) / len(colores)
    for y in range(y0, y1):
        pos = (y - y0) / alto
        i = int(pos)
        frac = pos - i
        for x in range(lienzo.w):
            c = colores[min(i, len(colores) - 1)]
            if frac > 0.78 and i + 1 < len(colores) and (x + y) % 2 == 0:
                c = colores[i + 1]
            lienzo.punto(x, y, c)


def seigaiha(t):
    W, H, R = 32, 16, 16
    lienzo = Lienzo(W, H)
    centros = []
    for fila in range(-2, 5):
        cy = fila * 8
        desplazamiento = 16 if fila % 2 else 0
        for col in range(-2, 3):
            centros.append((col * 32 + desplazamiento, cy))
    centros.sort(key=lambda c: c[1])
    for y in range(H):
        for x in range(W):
            elegido = None
            for cx, cy in centros:
                d = math.hypot(x + 0.5 - cx, y + 0.5 - cy)
                if d <= R and y + 0.5 <= cy:
                    elegido = d
            anillo = int(elegido // 4) if elegido is not None else 0
            borde = elegido is not None and (elegido % 4) < 1.15
            if borde:
                lienzo.punto(x, y, t['linea'])
            else:
                lienzo.punto(x, y, t['a'] if anillo % 2 else t['b'])
    return lienzo


def paisaje(t, noche, tx=92):
    W, H = 320, 180
    rnd = random.Random(7)
    lienzo = Lienzo(W, H)
    bandas(lienzo, t['cielo'], 0, 120)
    if noche:
        for _ in range(70):
            x, y = rnd.randrange(W), rnd.randrange(0, 90)
            lienzo.punto(x, y, t['estrella'] if rnd.random() > 0.3 else t['cielo'][1])
        lienzo.circulo(248, 34, 9, t['astro'])
        lienzo.circulo(251, 31, 2, t['astro2'])
        lienzo.circulo(244, 38, 1.5, t['astro2'])
    else:
        lienzo.circulo(236, 92, 16, t['astro2'])
        lienzo.circulo(236, 92, 13, t['astro'])
    for x in range(W):
        lejos = int(98 + 11 * math.sin(x / 23) + 6 * math.sin(x / 9 + 1) + 4 * math.sin(x / 41 + 3))
        for y in range(lejos, H):
            lienzo.punto(x, y, t['lejos'])
    for x in range(W):
        cerca = int(126 + 8 * math.sin(x / 31 + 2) + 5 * math.sin(x / 13))
        for y in range(cerca, H):
            lienzo.punto(x, y, t['cerca'])
    for x in range(W):
        borde = int(150 + 3 * math.sin(x / 7) + 2 * math.sin(x / 3 + 1))
        for y in range(borde, H):
            lienzo.punto(x, y, t['bosque'])
    for cx, cy, r in [(18, 150, 13), (40, 146, 10), (290, 148, 12), (312, 152, 10), (150, 158, 8), (176, 156, 9)]:
        lienzo.circulo(cx, cy, r, t['copa'])
        for _ in range(int(r * 2)):
            ang = rnd.random() * math.tau
            lienzo.punto(int(cx + math.cos(ang) * r * rnd.random()), int(cy + math.sin(ang) * r * rnd.random() - 2), t['hoja'])
    ty = 132
    oscuro = t['silueta']
    lienzo.rect(tx, ty - 26, 3, 26, oscuro)
    lienzo.rect(tx + 22, ty - 26, 3, 26, oscuro)
    lienzo.rect(tx - 5, ty - 30, 35, 3, oscuro)
    lienzo.punto(tx - 6, ty - 31, oscuro)
    lienzo.punto(tx + 30, ty - 31, oscuro)
    lienzo.rect(tx - 2, ty - 22, 29, 2, oscuro)
    lienzo.rect(tx + 11, ty - 27, 3, 5, oscuro)
    for px, py in [(70, 146), (124, 140), (200, 152), (258, 144)]:
        lienzo.rect(px, py - 4, 3, 4, oscuro)
        lienzo.rect(px - 1, py - 5, 5, 1, oscuro)
        lienzo.punto(px + 1, py - 3, t['luz'])
    return lienzo


def hoja(lienzo, x, y, c, borde):
    forma = ['..a..', '.aaa.', 'aaaaa', '.aaa.', '..b..']
    for j, fila in enumerate(forma):
        for i, ch in enumerate(fila):
            if ch == 'a':
                lienzo.punto(x + i, y + j, c)
            elif ch == 'b':
                lienzo.punto(x + i, y + j, borde)


CIELOS = {
    'dia': {
        'cielo': [hexa('#d9741f'), hexa('#ee9a2c'), hexa('#f7bf4a'), hexa('#f2c84b'), hexa('#f8e2a0')],
        'estrella': hexa('#f8efd8'),
        'astro': hexa('#fbf3df'),
        'astro2': hexa('#f8e2a0'),
        'lejos': hexa('#c4602e'),
        'cerca': hexa('#8a3a1e'),
        'bosque': hexa('#5a2412'),
        'copa': hexa('#a8431f'),
        'hoja': hexa('#d9741f'),
        'silueta': hexa('#3a140a'),
        'luz': hexa('#f2c84b'),
    },
    'noche': {
        'cielo': [hexa('#140810'), hexa('#1e0b17'), hexa('#2a0e25'), hexa('#3a0f34'), hexa('#4a1a3a')],
        'estrella': hexa('#f8efd8'),
        'astro': hexa('#f8efd8'),
        'astro2': hexa('#e6d2a6'),
        'lejos': hexa('#351607'),
        'cerca': hexa('#26120c'),
        'bosque': hexa('#160a07'),
        'copa': hexa('#3a140a'),
        'hoja': hexa('#6e2a16'),
        'silueta': hexa('#0d0507'),
        'luz': hexa('#f2c84b'),
    },
}
