class Book {
    constructor(title, author) {
      this.title = title;
      this.author = author;
    }
  }

  class BookCollection {
    constructor() {
      this.books = [];
      this.bookList = document.getElementById('my-book-list');
      this.bookTitle = document.getElementById('book-name');
      this.bookAuthor = document.getElementById('author-name');
      this.addForm = document.getElementById('form');
      this.addButton = document.getElementById('add-button');
      this.removeButton = document.getElementById('remove-button');

      this.addButton.addEventListener('click', this.addBook.bind(this));
      this.removeButton.addEventListener('click', this.removeSelectedBook.bind(this));

      this.loadBookCollection();
      this.displayBookList();
    }
    addBook(event) {
        event.preventDefault();
  
        const title = this.bookTitle.value;
        const author = this.bookAuthor.value;
  
        const newBook = new Book(title, author);
        this.books.push(newBook);
  
        this.clearInputFields();
        this.displayBookList();
        this.saveBookCollection();
      }
  
      removeSelectedBook() {
        const selectedBookIndex = this.getSelectedBookIndex();
  
        if (selectedBookIndex !== -1) {
          this.books.splice(selectedBookIndex, 1);
        }
  
        this.displayBookList();
        this.saveBookCollection();
      }
  
      getSelectedBookIndex() {
        const listItems = document.querySelectorAll('#my-book-list li');
  
        for (let i = 0; i < listItems.length; i++) {
          const listItem = listItems[i];
  
          if (listItem.classList.contains('selected')) {
            return i;
          }
        }
  
        return -1;
      }
  
      displayBookList() {
        this.bookList.innerHTML = '';
  
        this.books.forEach((book, index) => {
          const listItem = document.createElement('li');
          listItem.textContent = `${book.title} by ${book.author}`;
  
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.addEventListener('click', () => this.removeBook(index));
  
          listItem.appendChild(removeButton);
          this.bookList.appendChild(listItem);
        });
      }
  
      removeBook(index) {
        this.books.splice(index, 1);
        this.displayBookList();
        this.saveBookCollection();
      }
  
      clearInputFields() {
        this.bookTitle.value = '';
        this.bookAuthor.value = '';
      }
  
      saveBookCollection() {
        localStorage.setItem('bookCollection', JSON.stringify(this.books));
      }
  
      loadBookCollection() {
        const storedCollection = localStorage.getItem('bookCollection');
        this.books = storedCollection ? JSON.parse(storedCollection) : [];
      }
    }
  
    const bookCollection = new BookCollection();