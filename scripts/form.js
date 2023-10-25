// Event Listener for button
function prepareForm() {
    document.querySelector('#submit').addEventListener("click", function () {
        personalCheck();

    });
}

// Name functions
function nameCheck() {
    let name = document.querySelector('#nombre').value;

    if (!name) {
        return window.alert("Nombre vacío");
    }
    else if (isNaN(name)) {
        return true;

    }

    return window.alert("Datos introducidos no permitidos en Nombre");
}

function getName() {
    let name = document.querySelector('#nombre').value.trim();
    return name.charAt(0).toUpperCase() + name.slice(1);

}

// First Surname functions
function firstSurnameCheck() {
    let firstSurname = document.querySelector('#apellido_1').value;

    if (!firstSurname) {
        return window.alert("Primer apellido vacío");
    } else if (isNaN(firstSurname)) {
        return true;
    }

    return window.alert('Datos introducidos no permitidos en Primer Apellido');
}

function getFirstSurname() {
    let firstSurname = document.querySelector('#apellido_1').value;
    return firstSurname.charAt(0).toUpperCase() + firstSurname.slice(1);
}

// Second Surname Check 
function secondSurnameCheck() {

    let secondSurname = document.querySelector('#apellido_2').value.trim();

    if (!secondSurname) {
        return false;
    }
    else if (isNaN(secondSurname)) {
        return true;
    }
    return false;
}

function getSecondSurname() {
    let secondSurname = document.querySelector('#apellido_2').value;
    return secondSurname.charAt(0).toUpperCase() + secondSurnameSurname.slice(1);
}


// Genders Function
function genderCheck() {
    let genderTrimed = document.querySelector('#genero').value.trim();

    let gender = genderTrimed.charAt(0).toUpperCase();

    if (!gender) {
        return window.alert("No se ha especificado un género");
    }

    switch (gender) {
        case "H":
        case "F":
            return true;

    }
    return window.alert("Especifica un género Hombre o Mujer (H/M)");
}


// Postal Code functions
function cpCheck() {
    let cp = document.querySelector('#codigo-postal').value.trim();

    let regExpCp = /^\d{5}$/;


    if (!cp) {
        return window.alert("Introduce tu código postal");
    }
    else if (!cp.match(regExpCp)) {
        return window.alert("Datos introducidos incorrectos. Revise su código postal");
    }

    return true;

}

// Address check
function addressCheck() {
    let address = document.querySelector('#direccion').value.trim();

    if (!address) {
        return false;
    } else if (isNaN(address)) {
        return true;
    }
    return false;
}

// Dni functions
function dniCheck() {
    let dni = document.querySelector('#dni').value.trim();

    let dniRegExp = /^\d{8}[^ioñ]/i;
    let nieRegExp = /[x]\d{7}[^ioñ]/i;

    if (!dni) {
        return window.alert("Revisa los datos introducidos en el DNI/NIE");
    }
    if (dni.match(dniRegExp)) {
        return true;
    } else if (dni.match(nieRegExp)) {
        return true;
    }

    return window.alert("Los datos introducidos están incorrectos. Comprueba el DNI/NIE");
}


// Email functions
function emailCheck() {
    let email = document.querySelector('#email').value.trim();

    let emailRegExp = /^[^\s@]+@[^\s@]+$/i;

    if (!email) {
        return window.alert("Introduce el email");
    } else if (!email.match(emailRegExp)) {
        return window.alert("El email introducido no es correcto. Por favor, compruebalo");
    }

    return true;
}



// Phone number functions
function telefonoCheck() {
    let telefono = document.querySelector('#numero-telefono').value.trim();

    let telefonoRegExp = /^\d{9}$/;

    if (!telefono) {
        return window.alert('Introduce un número de teléfono');
    } else if (!telefono.match(telefonoRegExp)) {
        return window.alert("El número de telefono no cumple con los 9 dígitos. Por favor, revisalo");

    }

    return true;
}



// Civil status functions
function civilStatusCheck() {

    let civilStatusTrimered = document.querySelector('#estado-civil').value.trim();

    if (!civilStatusTrimered) {
        return window.alert("Indique su estado civil");
    }

    let civilStatus = civilStatusTrimered.charAt(0).toUpperCase();

    switch (civilStatus) {

        case "S":
        case "C":
        case "V":
        case "D":
            return true;

        default:
            return window.alert("Estado civil incorrecto. Vuelve a indicarlo");
    }
}


// Checking birthdate format
function checkDate() {
    let birthdate = document.querySelector('#birthdate').value.trim();
    let actualDate = new Date();
    let actualYear = actualDate.getFullYear();
    let inputDate;

    if (birthdate) {
        let birthdateParts = birthdate.split("/");
        if (birthdateParts.length === 3) {
            let day = parseInt(birthdateParts[0]);
            let month = parseInt(birthdateParts[1]) - 1;
            let year = parseInt(birthdateParts[2]);

            inputDate = new Date(year, month, day);
        }
    }

    if (!inputDate) {
        return false;
    } else if (inputDate.getFullYear() < actualYear && (actualYear - inputDate.getFullYear()) >= 18) {
        return true;
    }
    return false;
}

// Checking birth place
function birthPlaceCheck() {
    let birthPlace = document.querySelector('#lugar-nacimiento').value.trim();

    if (!birthPlace) {
        return false;
    }
    else if (isNaN(birthPlace)) {
        return true;
    }
    return false;
}


// Checking all personal data
function personalCheck() {

    // Importants checkings
    let nameCheckBoolean = nameCheck();
    let firstSurnameCheckBoolean = firstSurnameCheck();
    let genderCheckBoolean = genderCheck();
    let cpCheckBoolean = cpCheck();
    let dniCheckBoolean = dniCheck();
    let emailCheckBoolean = emailCheck();
    let telefonoCheckBoolean = telefonoCheck();
    let civilStatusCheckBoolean = civilStatusCheck();

    // Optional Checking: No salta alerta
    let birthDateFormat = checkDate();
    let birthPlaceCheckBoolean = birthPlaceCheck();
    let secondSurnameCheckBoolean = secondSurnameCheck();
    let addressCheckBoolean = addressCheck();


    if (nameCheckBoolean && firstSurnameCheckBoolean && genderCheckBoolean && cpCheckBoolean && dniCheckBoolean && emailCheckBoolean && telefonoCheckBoolean && civilStatusCheckBoolean) {
        if (birthDateFormat && birthPlaceCheckBoolean && secondSurnameCheckBoolean && addressCheckBoolean) {
            return true;

        } else {
            return true;

        }
    }
    else {
        return window.alert("Por favor, revisa tus datos personales introducidos");
    }

}


