const modal = document.querySelector('.modal');
const newBtn = document.querySelector('.new-btn');

newBtn.addEventListener('click', () => {
    modal.classList.add("active");
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