let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');

const cadenaCaracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyz1234567890!@#$%^&*()';

function generar(){

    let numeroDigitado = parseInt (cantidad.value);
    
    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor a 8");
    }

    let password = '';
    for(let i= 0; i < numeroDigitado; i++){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+=caracterAleatorio
    
    }


    contrasena.value = password;
    let passwordStrength = validatePasswordStrength(password);
    alert(`La contraseña es ${passwordStrength}`);
}

function limpiar() {
    document.getElementById("contrasena").value = "";
}

function validatePasswordStrength(password) {
    let hasUppercase = /[A-Z]/.test(password);
    let hasLowercase = /[a-z]/.test(password);
    let hasNumber = /\d/.test(password);
    let hasSpecialChar = /[!@#$%^&*()]/.test(password);

    if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {
        return "fuerte";
    } else {
        return "débil";
    }
}

function limpiar() {
    document.getElementById("contrasena").value = "";
}







