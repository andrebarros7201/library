const myLibrary = [];

function Book(name, author, pages, read) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

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

    const buttonDelete = document.createElement('button');
    buttonDelete.classList.add('delete');
    buttonDelete.textContent = 'Delete';
    
    buttonDelete.addEventListener('click', () =>{
        const index = myLibrary.indexOf(book)
        console.log(index);
        myLibrary.splice(index, 1);
        resetDisplay();
        displayBooks();
    });

    const toggle = document.createElement('button');
    toggle.textContent = 'Change Read';
    toggle.classList.add('toggleRead');
    toggle.addEventListener('click', () =>{
      console.log(book.read);
      if(book.read){
        book.read = false;
      }else{
        book.read = true;
      }
      resetDisplay();
      displayBooks();
    })


    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(buttonDelete);
    bookCard.appendChild(toggle);

    books.appendChild(bookCard);
  });
};

const narnia = new Book("The Chronicles of Narnia: The Lion, the Witch, and the Wardrobe", "C.S. Lewis", 192, false);
const percyJackson = new Book("Percy Jackson & the Olympians: The Lightning Thief", "Rick Riordan", 384, true);
const harryPotter = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 223, false);
const artemisFowl = new Book("Artemis Fowl", "Eoin Colfer", 288, true);
const hobbit = new Book("The Hobbit", "JRR Tolkien", 295, true);
addBookToLibrary(hobbit);
addBookToLibrary(artemisFowl)
addBookToLibrary(narnia);
addBookToLibrary(percyJackson);
addBookToLibrary(harryPotter);

const buttonOpenDialog = document.querySelector('#openDialog');
const buttonCloseDialog = document.querySelector('#closeDialog');
const dialog = document.querySelector('dialog');

buttonOpenDialog.addEventListener('click', () =>{
    dialog.showModal();
});

buttonCloseDialog.addEventListener('click', () =>{
    dialog.close();
});

const resetDisplay = () =>{
    const books = document.querySelector('.books')
    while(books.firstChild){
        books.removeChild(books.firstChild);
    }
}

displayBooks();
