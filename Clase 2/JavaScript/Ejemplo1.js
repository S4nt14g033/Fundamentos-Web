function validarInformacion() {
    //validar los campos del formulario utilizando un ciclo, posicionarse en el campo vacio, validar el formato del email    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var inputs = document.querySelectorAll("input[type='text'], input[type='email']");
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Por favor, complete todos los campos.");
            inputs[i].focus();
            return;
        }else if (inputs[i].type === "email") {
            // Validar formato del email
            var email = inputs[i].value;
            if (!emailPattern.test(email)) {
                alert("Por favor, ingrese un correo electrónico válido.");
                inputs[i].focus();
                return;
            }
        }
    }
    alert("Formulario enviado correctamente.");
}