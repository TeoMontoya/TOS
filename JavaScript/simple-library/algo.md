```javascript
const author = document.querySelector(".author");
const title = document.querySelector(".title");
const pages = document.querySelector(".pages");
const initializeButton = document.querySelector(".startButton");
const myLibrary = [];

initializeButton.addEventListener("click", function () {
    // This function will be executed when the button is clicked
    const bookExample = new Book(title.textContent, author.textContent, parseInt(pages.textContent), true);
    addBookToLibrary(bookExample);
});

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    // You can perform additional actions here, such as displaying the added book in your library view.
    console.log("Book added to library:", book);
}

// Example of initializing with a book
const initialBook = new Book('Sample Book', 'John Doe', 200, true);
addBookToLibrary(initialBook);
```