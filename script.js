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

function readBook(book) {
    if (book) {
      return 'Read';
    }
    return 'Not Read';
  }
  
  function Book(
    title,
    author,
    pages,
    image = 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg',
    read = false,
  ) {
    this.image = image;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }