function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = () => {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`
    }
  }

function addBookToLibrary(book, library) {
    return library.push(book)
}
const hobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
const wager = new Book('The Wager', 'David Grann', 352, false);
const shogun = new Book('Shogun', 'James Clavell', 1152, false);
const factfulness = new Book('Factfulness', 'Hans Rosling', 341, true);

const body = document.getElementById('body');
const bookArea = document.getElementById('main-container')

const initBookList = [hobbit, wager, shogun, factfulness];

let library = [];
library = initBookList;
refreshPage(initBookList);

function refreshPage(library){
    bookArea.textContent = '';
    library.forEach(book => {
        const bookEl = document.createElement('div');
        bookEl.className = 'book-card';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'title-div'
        const titleSpan = document.createElement('span');
        titleSpan.className = 'title-span';
        titleSpan.textContent = book.title;
        titleDiv.appendChild(titleSpan);

        const authorDiv = document.createElement('div');
        authorDiv.className = 'author';
        authorDiv.textContent = book.author;
        const pagesDiv = document.createElement('div');
        pagesDiv.className = 'pages';
        pagesDiv.textContent = `pages: ${book.pages}`
        const readDiv = document.createElement('div');
        readDiv.className = 'read';
        const readSpan = document.createElement('span');
        readSpan.className = 'read-span'
        readSpan.textContent = book.read;
        readDiv.textContent = 'Read?'
        readDiv.appendChild(readSpan);
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.className = 'remove-btn';
        removeBtn.addEventListener("click", () => removeBook(book));
        titleDiv.appendChild(removeBtn);
        const readBtn = document.createElement('button');
        readBtn.textContent = 'read'
        readBtn.className = 'read-btn';
        readBtn.addEventListener("click", () => changeRead(book));

        bookEl.appendChild(titleDiv);
        bookEl.appendChild(authorDiv);
        bookEl.appendChild(pagesDiv);
        bookEl.appendChild(readDiv);
        bookEl.appendChild(readBtn);
        bookArea.appendChild(bookEl);
    })
}


function refreshBook(book) {
    const newLibrary = library.map(b => {
        if (b.title === book.title) return book;
        return b;
    })
    library = newLibrary;
    refreshPage(newLibrary)
}
const modal = document.getElementById('add-modal');
function showModal(modal) {
}

function changeRead(book) {
    const newReadStatus = !book.read;
    refreshBook({...book, read: newReadStatus})
}

function removeBook(book) {
    const newLib = library.filter(b => b.title !== book.title)
    library = newLib;
    refreshPage(newLib);
}

const dialog = document.querySelector("dialog");
const showBtn = document.getElementById("add-book-btn");
const closeBtn = document.getElementById("close-modal")
// "Show the dialog" button opens the dialog modally
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

function addBook(e) {
    console.debug('did this???')
    e.preventDefault();
    const forma = e.target
}
// "Close" button closes the dialog
closeBtn.addEventListener("click", () => {
  dialog.close();
});