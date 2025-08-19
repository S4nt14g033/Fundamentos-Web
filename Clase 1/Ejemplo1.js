function mostrarMensaje() {
    nombre = document.getElementById("input1").value;
    
    if(nombre === "") {
        alert("Por favor, ingrese un nombre.");
        return;
    }
    alert("¡Hola " + nombre + "! Este es un mensaje de ejemplo.");
}