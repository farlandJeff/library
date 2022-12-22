const modal = document.querySelector('.modal');
const newBtn = document.querySelector('.new-btn');
const closeBtn = document.querySelector('.close-form');
const addBtn = document.querySelector('#add-btn');


newBtn.addEventListener('click', () => {
    modal.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
});

addBtn.addEventListener('click', getBook);

let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    
    //getBook();
    //let book = new Book();
}

function getBook() {
    event.preventDefault();
    let tmpTitle = document.querySelector('#title').value;
    let tmpAuther = document.querySelector('#author').value;
    let tmpPages = document.querySelector('#pages').value;
    let tmpRead = document.querySelector('#read').value;
    console.log(tmpRead);
}