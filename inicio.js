function handleSubmit() {
    let email = document.getElementById("email").value;

    // Expresión regular para validar que el correo esté en el formato correcto
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isOnlyLetters = /^[a-zA-Z]+$/.test(email);   // Verifica si el correo es solo letras
    let isOnlyNumbers = /^[0-9]+$/.test(email);      // Verifica si el correo es solo números

    // Verifica que el correo tenga el formato correcto y no sea solo letras o solo números
    if (email && emailPattern.test(email) && !isOnlyLetters && !isOnlyNumbers) {
        alert("Correo enviado: " + email); // Aquí podrías conectarlo con un servidor backend
        document.getElementById("email").value = ""; // Limpiar el campo de correo
    } else {
        alert("Por favor, ingresa un correo válido que no sea solo letras o solo números.");
    }
}