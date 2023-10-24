/*
1. Call in the modal, the form, the initialize button and the bookContainer

2. establish the logic of the inputs inside the modal that will make a book appear
2.1 assign the input values to the book Constructor
2.2 add the book to the array
2.3 render the books
2.4 console the myLybrary
2.5 change the modal visibility
2.6 reset the form

3. outside of that, establish the Book Constructor

4. book push function

5. create the book Rendering logic using 'myLibrary.forEach((book, index) =>

6. create the delete logic
6.1 delete book index logic

7. attach the delete handlers so the buttons
*/

//part 1.
//Calling the modal and the form
const modal = document.getElementById("myModal");
const form = document.getElementById("bookForm");
//calling the button and the bookContainer
const addBookBtn = document.getElementById("addBookButton");
const bookContainer = document.getElementById("book");

addBookBtn.addEventListener("click", function () {
  modal.style.display = "block";
});

// The array that will store the library
const myLibrary = [];

//2 establishing form logic
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const titleInput = document.getElementById("titleInput").value;
  const authorInput = document.getElementById("authorInput").value;
  const pagesInput = document.getElementById("pagesInput").value;

  if (titleInput && authorInput && pagesInput) {
    let newBook = new Book(titleInput, authorInput, pagesInput, true);
    addBookToLibrary(newBook);
    renderBooks();
    console.log(myLibrary);

    //2.5 reset modal visisbility
    modal.style.display = "none";
    //2.6 reset the form
    form.reset();
  }
});

// 3: Book Constructor
function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
}

// 4: Book push function
function addBookToLibrary(book) {
  myLibrary.push(book);
}

// 5: Book rendering
function renderBooks() {
  bookContainer.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <h2>Title:  ${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}
        <button class='delete-button' data-index=${index}>Delete</button>
        `;
    bookContainer.appendChild(card);
  });
  attachDeleteHandlers(); //attach event handlers to delete buttons
}

// 6. create the delete button logic
function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderBooks();
}

//  7 attach the deletebutton to the handlers
function attachDeleteHandlers() {
  const deleteButtons = document.querySelectorAll(".delete-button");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const index = button.getAttribute("data-index");
      deleteBook(index);
    });
  });
}

//initial book rendering
renderBooks();
