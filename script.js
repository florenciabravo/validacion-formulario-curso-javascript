const submitFunction = (event) => {
    if (!validarFormulario()){
        event.preventDefault() // que se prevenga la actualizacion de la web
    }else{
        event.preventDefault() // que se prevenga la actualizacion de la web

        alert(
            'Los datos enviados fueron: \n' +
            'Nombre: ' + document.getElementById('nombre').value + '\n' +
            'Apellido: ' + document.getElementById('apellido').value + '\n' +
            'Documento: ' + document.getElementById('documento').value + '\n' +
            'Email: ' + document.getElementById('email').value + '\n' +
            'Edad: ' + document.getElementById('edad').value + '\n' +
            'Actividad: ' + document.getElementById('actividad').value + '\n' +
            'Nivel de Estudio: ' + document.getElementById('nivelEstudio').value + '\n' 
        )
    }
}

document.getElementById('formulario').addEventListener('submit', submitFunction) // escucha el envio del formulario

function validarFormulario(){ // esto sera true o false segun sea valido o no el formulario
    // Esto valida los campos de texto
    const camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorreta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)) // Arma el ej: errorApellido, seria error + id con la primera en mayuscula
        if(campo.value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido !')
            validacionCorreta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
                mostrarError(errorCampo, 'Este campo debe tener al menos 3 caracteres !')
                validacionCorreta = false
        }else{
            ocultarError(errorCampo)
        }
    })

    // Esto valida el campo email
    const email = document.getElementById('email');
    let errorEmail = document.getElementById('errorEmail') 

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ //este regex valida que el formato del email sea valido
        ocultarError(errorEmail)
    }else{
        mostrarError(errorEmail, 'Ingrese un correo electronico valido !')
    }

    // Validacion de edad
    const edad = document.getElementById('edad')
    const errorEdad = document.getElementById('errorEdad')

    if(edad.value < 18) {
        mostrarError(errorEdad, 'Debes ser mayor de 18 anos para registrarte !!!')
        validacionCorreta = false
    }else{
        ocultarError(errorEdad)
    }

    // Validacion de la actividad
    const actividad = document.getElementById('actividad')
    const errorActividad = document.getElementById('errorActividad') 

    if(actividad.value == ''){
        mostrarError(errorActividad, 'Por favor, selecciona una actividad')
        validacionCorreta = false;
    }else{
        ocultarError(errorActividad)
    }

    // Validacion de nivel de estudio
    const nivelEstudio = document.getElementById('nivelEstudio')
    const errorNivelEstudio = document.getElementById('errorNivelEstudio')

    if(nivelEstudio.value == ''){
        mostrarError(errorNivelEstudio, 'Por favor, selecciona un nivel de estudio')
        validacionCorreta = false;
    }else{
        ocultarError(errorNivelEstudio)
    }

    // Validar los terminos y condiciones 
    const aceptoTerminos = document.getElementById('aceptoTerminos')
    const errorAceptoTerminos = document.getElementById('errorAceptoTerminos')

    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, 'Debes aceptar terminos y condiciones!')
        validacionCorreta = false
    }else{
        ocultarError(errorAceptoTerminos)
    }

    return validacionCorreta // Esto dira si el formulario completo es o no valido
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento) => {
    elemento.textContent = '';
    elemento.style.display = "none";
}