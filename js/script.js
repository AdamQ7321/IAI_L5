
//kontakt
let send = document.querySelector(".send");

send.addEventListener("click", checkForm);


function addClass(element, className) {
    element.classList.add(className);
}

function removeClass(element, className) {
    element.classList.remove(className);
}


function checkForm() {

    let wiek = document.querySelector("#age").value;
    let imie = document.querySelector("#name").value;
    let nazwisko = document.querySelector('#surname').value;
    let email = document.querySelector('#email').value;
    let opis = document.querySelector('#description').value;

    const mailReg = new RegExp('^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$', 'gi');

    let numberValue = wiek.value;
    let textValue = imie.value;
    let nazwiskoV = nazwisko.value;
    let emailV = email.value;
    let opisV = opis.value;

    if (numberValue === '' || !parseInt(numberValue) || isNaN(numberValue) || numberValue < 1 || numberValue > 100) {
        addClass(wiek, 'is-invalid');
    } else {
        removeClass(wiek, 'is-invalid');
    }

    if (textValue === '' || parseInt(textValue)) {
        addClass(imie, 'is-invalid');
    } else {
        removeClass(imie, 'is-invalid');
    }

    if (nazwiskoV === '' || parseInt(nazwiskoV)) {
        addClass(nazwisko, 'is-invalid');
    } else {
        removeClass(nazwisko, 'is-invalid');
    }

    if (opisV === '') {
        addClass(nazwisko, 'is-invalid');
    } else {
        removeClass(nazwisko, 'is-invalid');
    }

    if (emailV === '' || !mailReg.test(emailV)) {
        addClass(nazwisko, 'is-invalid');
    } else {
        removeClass(nazwisko, 'is-invalid');
    }
}
