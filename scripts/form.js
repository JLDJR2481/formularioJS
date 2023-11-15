// Event Listener for button submit, password filter, automatic cardType change and checking
function prepareForm() {
    document.querySelector('#submit').addEventListener("click", function () {
        verificationPage();
    });

    document.querySelector('#cardNumber').addEventListener("input", function () {
        cardType();
    });

    document.querySelector('#cvc').addEventListener("input", function () {
        cvcBlock();
    });

    document.querySelector('#color').addEventListener("input", function () {
        colorChangeandCheck();

    });
}

// Prepare Password
function preparePassword() {
    let passwordInput = document.querySelector('#password');
    passwordInput.type = "password";

}

// All checks
function formChecking() {
    let personalCheckBoolean = personalCheck();
    let corporativeCheckBoolean = corporativeCheck();
    let educationalCheckBoolean = educationCheck();
    let languageCheckBoolean = languageCheck();
    let paymentMethodCheckBoolean = paymentMethodCheck();

    if (personalCheckBoolean && corporativeCheckBoolean && educationalCheckBoolean && languageCheckBoolean) {
        if (paymentMethodCheckBoolean) {
            return true;
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// New page after checking
function verificationPage() {
    if (formChecking()) {
        window.location.href = "html/verificationPage.html";
    }
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
    return secondSurname.charAt(0).toUpperCase() + secondSurname.slice(1);
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

function getDni() {
    let dni = document.querySelector('#dni').value.trim();
    return dni;
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

// Function for employee number. Employee number must be DNI without final letter
function employeeCheck() {

    let dni = getDni().slice(0, -1);

    let employeeNumber = document.querySelector('#employeeNumber').value.trim();

    if (dni == employeeNumber) {
        return true;
    }
    else {
        return window.alert("El dni y el nº de empleado no coinciden. Por favor, revísalo");
    }

}

// Function for user
function userCheck() {
    let user = document.querySelector('#user').value.trim();

    if (!user) {
        return window.alert('No se ha introducido un usuario. Por favor, introdúcelo');
    }
    else {
        return true;
    }
}

// Function for departments
function departmentCheck() {
    let department = document.querySelector('#department').value.trim();

    if (!department) {
        return window.alert('Introduce el departamento, por favor');
    }
    else {
        return true;

    }
}

// Checking stardate not after today
function startDateCheck() {

    let startDate = document.querySelector('#start_date').value.trim();
    let actualDate = new Date();
    let inputDate;

    if (startDate) {
        let startDateParts = startDate.split("/");
        if (startDateParts.length === 3) {
            let day = parseInt(startDateParts[0]);
            let month = parseInt(startDateParts[1]) - 1;
            let year = parseInt(startDateParts[2]);

            inputDate = new Date(year, month, day);
        }
    }

    if (!inputDate) {
        return window.alert('Introduce la fecha de inicio');
    }

    else if (inputDate > actualDate) {
        return window.alert("La fecha es superior al día actual. Revisalo por favor");
    } else {
        return true;
    }

}

// Checking password
function passwordCheck() {
    let password = document.querySelector('#password').value.trim();
    let passwordRegex = /^(?=.*[A-Z]*)(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!password) {
        return window.alert("Introduce una contraseña");
    } else if (!password.match(passwordRegex)) {
        return window.alert("Tu contraseña no cumple con lo necesario. Debe tener una mayúscula, una minúscula, un número y una longitud de 8 carácteres");
    } else {
        return true;
    }
}

function colorChangeandCheck() {
    let color = document.querySelector('#color').value.trim();
    let colorRegex = /^[0-9a-f]{6}$/i;
    if (color) {
        if (color.match(colorRegex)) {
            document.body.style.color = '#' + color;

            if (color == "ffffff") {
                document.body.style.backgroundColor = "#000000";
            }
        }
        else {
            document.body.style.color = "#000000";
            document.body.style.backgroundColor = "#ffffff";
        }
    }
}

// Checking hours is number and not bigger than 40
function jornadaCheck() {
    let jornadaSemanal = document.querySelector('#work_hours').value;

    let jornadaRegExp = /^\d{2}$/;

    if (jornadaSemanal) {
        if (jornadaSemanal.match(jornadaRegExp)) {
            if (parseInt(jornadaSemanal) <= 40) {
                return true;
            } else {
                return window.alert("La jornada semanal no puede ser mayor de 40h");
            }
        } else {
            return window.alert("Los datos introducidos en la jornada semanal no son correctos. Por favor, compruebelo.");
        }
    } else {
        return false;
    }
}

// Checking languages levels
function languagesCheck(language) {
    let idCheck = '#' + language;
    let languageLevel = document.querySelector(idCheck).value.trim();

    let languageLevelRegExp = /^[ABC][12]/i;

    if (language == "english")
        if (!languageLevel.match(languageLevelRegExp)) {
            languageLevel = languageLevel.charAt(0).toUpperCase() + languageLevel.slice(1);
        } else if (languageLevel.match(languageLevelRegExp)) {

        } else {
            return window.alert('Por favor, introduce bien los datos en el lenguaje Inglés');
        }
    else {
        if (!languageLevel.match(languageLevelRegExp)) {
            languageLevel = languageLevel.charAt(0).toUpperCase() + languageLevel.slice(1);
        } else if (languageLevel.match(languageLevelRegExp)) {
        }
    }


    switch (languageLevel) {
        case "A1":
        case "A2":
        case "B1":
        case "B2":
        case "C1":
        case "C2":
        case "Nativo":
            return true;

        default:
            return false;
    }

}

// Automatic change type card and blocking non-digit characters
function cardType() {
    let cardTypeElement = document.querySelector('#cardType');
    let cardNumberElement = document.querySelector('#cardNumber');
    let cardNumberValue = cardNumberElement.value;
    let realCardNumber = "";

    if (cardNumberValue.length > 0) {
        if (/^[0-9]+$/.test(cardNumberValue)) {
            const firstDigit = cardNumberValue[0];

            if (firstDigit === "4") {
                cardTypeElement.value = "Visa";
            } else if (firstDigit === "5") {
                cardTypeElement.value = "MasterCard";
            }
            realCardNumber += cardNumberValue;
        }
    } else {
        cardTypeElement.value = "Tipo de tarjeta";
    }

    cardNumberElement.value = realCardNumber;
}

// Checking card number
function cardNumberCheck() {
    let cardNumber = document.querySelector('#cardNumber').value;


    if (cardNumber) {
        if (cardNumber.length == 16) {
            return true;
        } else if (cardNumber.length >= 16 && cardNumber.length != 16) {
            return window.alert("El número de tarjeta no tiene 16 digitos");
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// Card name validation
function cardNameCheck() {
    cardNameValue = document.querySelector('#cardName').value.trim();
    if (cardNameValue) {
        let nombreTarjeta = cardNameValue.split(' ');
        let name = getName().toLowerCase();
        let firstSurname = getFirstSurname().toLowerCase();
        let secondSurname = getSecondSurname().toLowerCase();
        let cardNom = nombreTarjeta[0].toLowerCase();
        let cardFirstSurname = nombreTarjeta[1].toLowerCase();

        if (nombreTarjeta.length == 3) {
            var cardSecondSurname = nombreTarjeta[2].toLowerCase();
        }

        if (nombreTarjeta.length == 2) {

            if (cardNom == name && cardFirstSurname == firstSurname) {
                return true;
            } else {
                return window.alert("Los datos de la tarjeta y los personales no coinciden");
            }

        } else if (nombreTarjeta.length == 3) {
            if (cardNom == name && cardFirstSurname == firstSurname && cardSecondSurname == secondSurname) {
                return true;
            }
            else {
                return window.alert("Los datos de la tarjeta no coinciden con los personales");
            }

        } else {
            return window.alert("Falta más información para verificar la tarjeta");
        }
    } else {
        return false;
    }
}

// CVC validation
function cvcCheck() {
    let cvc = document.querySelector('#cvc').value.trim();
    let cvcRegEx = /^\d{3}$/;

    if (cvc) {
        if (!cvc.match(cvcRegEx)) {
            return window.alert('El CVC no es correcto, vuelve a intentarlo');
        } else {
            return true;
        }
    } else {
        return false;
    }
}

// Blocking non-digit characters in CVC
function cvcBlock() {
    let cvcElement = document.querySelector('#cvc');
    let cvcElementValue = cvcElement.value;
    let realCvc = "";

    if (cvcElementValue.length > 0) {
        if (/^[0-9]+$/.test(cvcElementValue)) {
            realCvc += cvcElementValue;
        }
    }

    cvcElement.value = realCvc;

}

// Check expiration date
function expirationCheck() {
    let expirationDate = document.querySelector('#expirationDate').value.trim();

    let actualDate = new Date();
    let inputDate;

    if (expirationDate) {
        let expirationDateParts = expirationDate.split("/");
        if (expirationDateParts.length === 3) {
            let day = parseInt(expirationDateParts[0]);
            let month = parseInt(expirationDateParts[1]) - 1;
            let year = parseInt(expirationDateParts[2]);

            inputDate = new Date(year, month, day);
        }

        if (inputDate > actualDate) {
            return true;
        } else {
            return window.alert("La tarjeta ha caducado. Revisalo, por favor");
        }
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
            // Only if has a second surname (for card validation)
        } else if (secondSurnameCheckBoolean) {
            return true;

        }
        else {
            return true;
        }
    }
    else {
        return window.alert("Por favor, revisa tus datos personales introducidos");
    }

}


// Checking all corporative data
function corporativeCheck() {
    let employeeCheckBoleean = employeeCheck();
    let userCheckBoolean = userCheck();
    let departmentCheckBoolean = departmentCheck();
    let startDateCheckBoolean = startDateCheck();
    let passwordCheckBoolean = passwordCheck();
    let jornadaCheckBoolean = jornadaCheck();

    if (employeeCheckBoleean && userCheckBoolean && departmentCheckBoolean && startDateCheckBoolean && passwordCheckBoolean && jornadaCheckBoolean) {
        return true;
    }
    else {
        return window.alert('Revisa tus datos corporativos');
    }

}


// Checking education data
function educationCheck() {
    let educationLevel = document.querySelector('#education_level').value.trim();

    if (!educationLevel) {
        return window.alert('Introduce los estudios más elevados que tengas');
    } else {
        return true;
    }
}

// Checking language data
function languageCheck() {
    let englishCheckBoolean = languagesCheck("english");

    // Secondary checks
    let catalanCheckBoolean = languagesCheck("catalan");
    let castellanoCheckBoolean = languagesCheck("castellano");
    let othersCheckBoolean = languagesCheck("others");

    if (englishCheckBoolean) {
        if (catalanCheckBoolean && castellanoCheckBoolean && othersCheckBoolean) {
            return true;
        } else {
            return true;
        }
    } else {
        return window.alert("Por favor, revisa tus datos de lenguaje");
    }

}

// Checking payment data
function paymentMethodCheck() {

    let cardNumberCheckBoolean = cardNumberCheck();
    let cardNameCheckBoolean = cardNameCheck();
    let cvcCheckBoolean = cvcCheck();
    let expirationCheckBoolean = expirationCheck();

    if (cardNumberCheckBoolean) {
        if (cardNameCheckBoolean && cvcCheckBoolean && expirationCheckBoolean) {
            return true;
        } else {
            return window.alert("Comprueba tus datos de tarjeta");
        }
    }

    else {
        return true;
    }



}

