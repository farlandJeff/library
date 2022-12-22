const modal = document.querySelector('.modal');
const newBtn = document.querySelector('.new-btn');
const closeBtn = document.querySelector('.close-form');

newBtn.addEventListener('click', () => {
    modal.classList.add("active");
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("active");
});



let myLibrary = [];

function Book() {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

function addBookToLibrary() {
    
}