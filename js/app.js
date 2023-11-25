document.addEventListener('DOMContentLoaded',() => {
    const formulario = document.querySelector('#contenedor')
    const btnComprobar = document.querySelector('#btnComprobar')
    const inputCorreo = document.querySelector('#correo')
    btnComprobar.addEventListener('click', presionarBoton)



    function presionarBoton(e){
        e.preventDefault()
        let valorInput = document.querySelector('#correo').value
        validarCorreo(valorInput)
    }

    function validarCorreo(valor){
        (!valor.trim())?  mostrarAlerta('No puede dejar vacio el campo',false) : comprobarEmail();
                   
    }

    function mostrarAlerta(mensaje, enviado){
        // Seleccion de input
        limpiarAlertas()
        const alerta = document.createElement('P')
        alerta.className = 'error px-4 text-xs'
        alerta.textContent = mensaje
        if(enviado){
            inputCorreo.classList.add('border-green-500')
            inputCorreo.classList.remove('border-red-500')
            alerta.classList.toggle('text-green-500')
            setTimeout(() => {
                limpiarAlertas()
                inputCorreo.classList.remove('border-green-500')
                inputCorreo.classList.remove('border-red-500')
                inputCorreo.value = ''
            }, 3000)
        }  
        else {
            inputCorreo.classList.add('border-red-500')
            alerta.classList.add('text-red-500');
        }
        
        

        formulario.appendChild(alerta)
    }


    function comprobarEmail(){
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        (regex.test(inputCorreo.value))? mostrarAlerta('Gracias por suscribirte',true) : mostrarAlerta('El correo es invalido',false) 
    }


    function limpiarAlertas(){
        if(formulario.children[1]){
            formulario.removeChild(formulario.children[1])
        }
    }
} )