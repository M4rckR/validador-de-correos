document.addEventListener('DOMContentLoaded',() => {
    const formulario = document.querySelector('#contenedor-input')
    const btnComprobar = document.querySelector('#btnComprobar')
    btnComprobar.addEventListener('click', presionarBoton)



    function presionarBoton(e){
        e.preventDefault()
        let valorInput = document.querySelector('#correo').value
        validarCorreo(valorInput)
    }

    function validarCorreo(valor){
        if(!valor.trim()) {
            alertaVacio()
        }
    }

    function alertaVacio(){
        // Seleccion de input
        const input = document.querySelector('')

        const alerta = document.createElement('P')
        alerta.textContent = 'No puede dejar vacio el campo'


        alerta.className = 'block'



        formulario.appendChild(alerta)
    }
} )