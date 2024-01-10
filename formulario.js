
// Leer los valores de los inputs y textarea

const datos = {
    nombre: '',
    telefono: '',
    correo: '',
    mensaje: ''
}
const nombre = document.querySelector('#nombre');
const telefono = document.querySelector('#telefono');
const correo = document.querySelector('#correo');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
telefono.addEventListener('input', leerTexto);
correo.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);
formulario.addEventListener('submit', function(e){
    e.preventDefault;
    //Validar formulario
    const { nombre , telefono, correo, mensaje  } = datos;
    if(nombre === ''|| telefono === '' || correo === '' || mensaje === ''){
        mostrarAlerta("Todos los campos son obligatorios", true);
        return;
    }
    mostrarAlerta("Mensaje enviado con éxito");
});

function leerTexto(e){
    datos[e.target.id] = e.target.value;
};

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    } else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);

    //Desaparece después de 3 segundos
    setTimeout(() => {
        alerta.remove();
    }, 5000);
}



