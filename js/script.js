console.log("JavaScript está funcionando")

const formulario = document.getElementById("formulario-registro")

const campoNombre = document.getElementById("nombre")
const campoCorreo = document.getElementById("correo")
const campoContrasena = document.getElementById("contrasena")
const campoContrasena2 = document.getElementById("contrasena2")
const campoTelefono = document.getElementById("telefono")

const mensajeR = document.getElementById("mensaje-resultado-r")

// Cuando se envíe el formulario de registro, que ejecute lo que está adentro.
formulario.addEventListener("submit", function(evento){
// Que no haga el comportamientio predeterminado que está dentro.
// Que no recargue/envie el formulario inmediatamente, asi se puede validar los datos primero.
    evento.preventDefault();

    const nombre = campoNombre.value.trim(); //trim() elimina espacios al principio y al final
    const correo = campoCorreo.value.trim();
    const contrasena = campoContrasena.value;
    const contrasena2 = campoContrasena2.value;
    const telefono = campoTelefono.value;

    mensajeR.textContent = ""; //Para que limpie el mensaje en caso de ingresar correctamente los datos
    mensajeR.className = "";

    if (
        nombre === ""||
        correo === ""||
        contrasena === ""||
        contrasena2 === ""

    ){
        mensajeR.textContent = "Debe completar todos los campos obligatoriamente";

        mensajeR.className = "alert alert-danger mt-4";
        
        return;
    }

    if(nombre.length > 100){

        mensajeR.textContent = "El nombre no puede superar los 100 carácteres";

        mensajeR.className = "alert alert-danger mt-4";

        return;
    }

    // si el nombre ! cumple esta regla

    if(!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(nombre)){

        mensajeR.textContent = "El nombre solo puede contener letras y espacios ";

        mensajeR.className = "alert alert-danger mt-4";

        return;
 
    }

    if(correo.length > 60 ){

        mensajeR.textContent = "El correo no puede superar los 60 carácteres";

        mensajeR.className = "alert alert-danger mt-4";

        return;

    }

    // últimos carácteres
    if (!correo.endsWith("@duoc.cl")){

        mensajeR.textContent = "Correo erroneo, intente nuevamente";
        
        mensajeR.className = "alert alert-danger mt-4";
        
        return;
    }

    if (contrasena > 10){     

    }

    console.log(nombre);
    console.log(correo);
    console.log(contrasena);
    console.log(contrasena2);
    console.log(telefono);



});

