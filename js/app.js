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
        //console.log(e.target.parentElement)
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
            
        }
                            //estas dos condiciones se han de cumplir-tiene que ser un email y tiene que fallar el email
        if (e.target.id==='email' && !validarEmail(e.target.value)){
            mostrarAlerta ('el email no es válido', e.target.parentElement )
            return;

        }
        limpiarAlerta(e.target.parentElement);//elimina solo la alerta que toca
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia );

        //generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        //console.log(error);

        //inyectar el error al formulario
        referencia.appendChild(error);

    }
    function limpiarAlerta(referencia) {
         //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta){
             alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ //expresión regular usuario@dominio.com
        const resultado =regex.test(email);
        return resultado;
    }

});