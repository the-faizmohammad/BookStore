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
