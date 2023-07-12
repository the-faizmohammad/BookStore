// Get book list element
const bookList = document.getElementById('my-book-list');
// Get form and input elements
const addForm = document.getElementById('form');
const bookTitle = document.getElementById('book-name');
const bookAuthor = document.getElementById('author-name');
// Initialize the book-collection array
let bookCollection = [];
function addBook() {
    // Retrieve the values from the input fields
    const title = bookTitle.value;
    const author = bookAuthor.value;
  
    // Create a new book object
    const newBook = {
      title: title,
      author: author
    };
  
    // Add the new book to the bookCollection array
    bookCollection.push(newBook);
  
    // Clear the input fields
    bookTitle.value = '';
    bookAuthor.value = '';
  
    // Optional: Update the book list in the UI
    displayBookList();
  }

  function removeBook(title) {
    // Filter out the book with the specified title
    bookCollection = bookCollection.filter(book => book.title !== title);
  
    // Optional: Update the book list in the UI
    displayBookList();
  }
  
  