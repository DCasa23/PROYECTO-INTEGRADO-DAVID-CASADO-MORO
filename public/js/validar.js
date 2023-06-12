const nombre = document.getElementById("nombreform")
const apellidos = document.getElementById("apellidosform")
const correo = document.getElementById("correoform")
const password = document.getElementById("passwordform")
const telefono = document.getElementById("telefonoform")
const dni = document.getElementById("dniform")
const direccion = document.getElementById("direccionform")

//Serán las diferentes validaciones de los campos del formulario a tiempo real por medio ONKEYUP

function validarName() {
    if (nombre.value.length < 2) {
        nombre.style.border = '2px solid red';
        nombre.style.background = '#ff99b2';
        document.getElementById("textoNombre").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El nombre introducido es pequeño o esta vacio</span>";
       


        incorrectoNombre = true;


    } else {
        nombre.style.background = ' #3CBC8D';
        nombre.style.color = 'white';
        nombre.style.border = '2px solid green';
        document.getElementById("textoNombre").innerHTML = "";
        
        incorrectoNombre = false;
    }
}
function validarApellidos() {
    if (apellidos.value.length < 5) {
        apellidos.style.background = '#ff99b2';
        apellidos.style.border = '2px solid red';
        document.getElementById("textoApellidos").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El apellido introducido es pequeño o esta vacio</span>";

        incorrectoApellidos = true


    } else {
        apellidos.style.background = ' #3CBC8D';
        apellidos.style.color = 'white';
        apellidos.style.border = '2px solid green';
        document.getElementById("textoApellidos").innerHTML = "";
        
        
        incorrectoApellidos = false;
    }
}
function validarCorreoForm() {
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!regexEmail.test(correoform.value)) {
        correo.style.background = '#ff99b2';
        correo.style.border = '2px solid red';
        document.getElementById("textoCorreo").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El correo tiene un formato inadecuado</span>";

        incorrectoCorreo = true


    } else {
        correo.style.background = ' #3CBC8D';
        correo.style.color = 'white';
        correo.style.border = '2px solid green';
        document.getElementById("textoCorreo").innerHTML = "";
        
        incorrectoCorreo = false;
    }
}
function validarPassword() {
    if (password.value.length < 5) {
        password.style.border = '2px solid red';
        password.style.background = '#ff99b2';
        
        document.getElementById("textoPassword").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El password introducido es pequeño o esta vacio</span>";


        incorrectoPassword = true;


    } else {

        password.style.background = ' #3CBC8D';
        password.style.color = 'white';
        password.style.border = '2px solid green';
        document.getElementById("textoPassword").innerHTML = "";
        incorrectoPassword = false;
    }
}
function validarTelefonoForm() {
    let regexMOVIL = /^(\d{3}[ ]\d{3}[ ]\d{3})|(\d{3}[ ]\d{2}[ ]\d{2}[ ]\d{2})$/;
    if (!regexMOVIL.test(telefonoform.value)) {

        telefono.style.background = '#ff99b2';
        telefono.style.border = '2px solid red';
        document.getElementById("textoTelefono").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El telefono tiene un formato inadecuado</span>";

        incorrectoTelefono = true


    } else {

        telefono.style.background = ' #3CBC8D';
        telefono.style.color = 'white';
        telefono.style.border = '2px solid green';
        document.getElementById("textoTelefono").innerHTML = "";
        
        incorrectoTelefono = false;
    }
}
function validarUsuarioForm() {
    if (usuario.value.length < 5) {

        usuario.style.border = '2px solid red';
        usuario.style.background = '#ff99b2';
        document.getElementById("parrafo").innerHTML = "<span style='color: black;font-weight: bold;opacity:1.25;'>El usuario introducido es pequeño o esta vacio</span>";
        document.getElementById("textoUsuario").innerHTML = "";


        incorrectoUsuario = true;


    } else {

        usuario.style.background = ' #3CBC8D';
        usuario.style.color = 'white';
        usuario.style.border = '2px solid green';
        document.getElementById("textoUsuario").innerHTML = "<img src=\"../images/ok.png\" width=\'24px\' >";
        document.getElementById("parrafo").innerHTML = "";
        incorrectoUsuario = false;
    }
}

function validarDNIForm() {
    let regexDNI = /^(\d{8})([A-z])$/;
    if (!regexDNI.test(dni.value)) {

        dni.style.border = '2px solid red';
        dni.style.background = '#ff99b2';
        
        document.getElementById("textoDni").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El dni introducido es pequeño o esta vacio</span>";

        
        incorrectoDni = true;

        password
    } else {

        dni.style.background = ' #3CBC8D';
        dni.style.color = 'white';
        dni.style.border = '2px solid green';
        document.getElementById("textoDni").innerHTML = "";
        
        incorrectoDni = false;
    }
}

function validarDireccionForm() {
    if (direccion.value.length < 5) {

        direccion.style.border = '2px solid red';
        direccion.style.background = '#ff99b2';
        document.getElementById("textoDireccion").innerHTML = "<br><span style='color: black;font-weight: bold;opacity:1.25;'>El direccion introducido es pequeño o esta vacio</span>";

        
        incorrectoDireccion = true;


    } else {

        direccion.style.background = ' #3CBC8D';
        direccion.style.color = 'white';
        direccion.style.border = '2px solid green';
        document.getElementById("textoDireccion").innerHTML = "";
        
        incorrectoDireccion = false;
    }
}