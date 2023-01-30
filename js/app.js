document.addEventListener('DOMContentLoaded', function(){
    //seleccionar los elementos del interface
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar (e){
        console.log(e.target.parentElement)
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            //console.log('está vacio');
        }else{
            console.log('si hay algo...');
        }
    }

    function mostrarAlerta(mensaje, referencia){
        //generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        //console.log(error);

        //inyectar el error al formulario
        referencia.appendChild(error);

    }

});