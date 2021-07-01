const myLibrary = [];
const body = document.getElementById('body');
let title;
let author;
let pages;
let image;

const closeButton = document.getElementById('close-button');
const screen = document.getElementById('screen');
const form = document.getElementById('form');
const button = document.getElementById('add-book');
const submit = document.getElementById('submit-book');

function openForm() {
    form.classList.toggle('form2');
    screen.classList.toggle('form2');
    closeButton.classList.toggle('form2');
}

button.addEventListener('click', openForm);
submit.addEventListener('click', openForm);
closeButton.addEventListener('click', openForm);
