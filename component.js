let dismissAlert = document.getElementsByClassName('dismiss');
let dismissCard = document.getElementsByClassName('dismiss-card');
let input_field_valid = document.getElementsByClassName('input-field-valid');
let modalbutton = document.getElementById('modalbutton');
let modal_container = document.querySelector('.modal-container');
let toast_container = document.querySelector('.toast-container');
let modal_button = document.querySelector('.modal-button');
let toast_button = document.querySelector('.toast-close');

Array.from(dismissAlert).forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.style.display = 'none';
    });
});

Array.from(dismissCard).forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.style.display = 'none';
    });
});

Array.from(input_field_valid).forEach(element => {
    element.addEventListener('input', () => {
        if (element.validity.valid) {
            element.nextSibling.nextSibling.style.color = '#5cb85c';
            element.nextSibling.nextSibling.innerText = 'Correct';
        }
        else {
            element.nextSibling.nextSibling.style.color = '#ff0000';
            element.nextSibling.nextSibling.innerText = 'Wrong';
        }
        if (element.value.length === 0) {
            element.nextSibling.nextSibling.style.color = 'grey';
            element.nextSibling.nextSibling.innerText = 'Status';
        }
    });
});

modalbutton.addEventListener('click', () => {
    modal_container.style.display = 'block';
});

modal_button.addEventListener('click', () => {
    modal_container.style.display = 'none';
});

toast_button.addEventListener('click', () => {
    toast_container.style.display = 'none';
})