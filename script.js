const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

Book.prototype.info = () => {
  if (this.read) {
    return `${this.name} by ${this.author}, ${this.pages} pages, already read.`;
  } else {
    return `${this.name} by ${this.author}, ${this.pages} pages, not read yet.`;
  }
};

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const displayBooks = () => {
    const books = document.querySelector('.books');
  myLibrary.forEach((book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book");

    const title = document.createElement("h2");
    title.textContent = `${book.name}`;

    const author = document.createElement("p");
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement("p");
    pages.textContent = `Nº of pages: ${book.pages}`;

    const read = document.createElement("p");
    read.textContent = `Is read: ${book.read}`;

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);

    books.appendChild(bookCard);
  });
};

const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
addBookToLibrary(hobbit);
addBookToLibrary(hobbit);
addBookToLibrary(hobbit);
addBookToLibrary(hobbit);
addBookToLibrary(hobbit);
addBookToLibrary(hobbit);

console.log(myLibrary);

const buttonOpenDialog = document.querySelector('#openDialog');
const buttonCloseDialog = document.querySelector('#closeDialog');
const dialog = document.querySelector('dialog');

buttonOpenDialog.addEventListener('click', () =>{
    dialog.showModal();
});

buttonCloseDialog.addEventListener('click', () =>{
    dialog.close();
})

displayBooks();
