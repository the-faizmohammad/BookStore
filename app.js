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
  function displayBookList() {
    // Clear the existing content of the book list
    bookList.innerHTML = '';
  
    // Iterate over the bookCollection array
    bookCollection.forEach(book => {
      // Create a new list item element for each book
      const listItem = document.createElement('li');
      listItem.textContent = `${book.title} by ${book.author}`;
  
      // Append the list item to the book list
      bookList.appendChild(listItem);
    });
  }
  
  // Get the add and remove buttons
const addButton = document.getElementById('add-button');
const removeButton = document.getElementById('remove-button');

// Add event listener for the add button
addButton.addEventListener('click', addBook);

// Add event listener for the remove button
removeButton.addEventListener('click', removeSelectedBook);
// Initialize the bookCollection array with the data from localStorage
let bookCollection = loadBookCollection();
// Function to add a new book to the collection
function addBook(event) {
  event.preventDefault();

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

  // Update the book list in the UI
  displayBookList();
}

// Function to remove the selected book from the collection
function removeSelectedBook() {
  // Retrieve the selected book from the UI (e.g., based on user selection, or any other criteria)
  const selectedBookIndex = getSelectedBookIndex();

  // Remove the selected book from the bookCollection array
  if (selectedBookIndex !== -1) {
    bookCollection.splice(selectedBookIndex, 1);
  }

  // Update the book list in the UI
  displayBookList();
   // Save the updated book collection to localStorage
   saveBookCollection();
}

// Function to get the index of the selected book
function getSelectedBookIndex() {
    // Get all the list items within the book list
    const listItems = document.querySelectorAll('#my-book-list li');
  
    // Iterate over the list items
    for (let i = 0; i < listItems.length; i++) {
      const listItem = listItems[i];
  
      // Check if the list item is selected (you can use any criteria here based on your UI implementation)
      if (listItem.classList.contains('selected')) {
        // Return the index of the selected book
        return i;
      }
    }
  
    // If no book is selected, return -1
    return -1;
  }
  

// Function to display all books in the collection
function displayBookList() {
  // Clear the existing content of the book list
  bookList.innerHTML = '';

  // Iterate over the bookCollection array
  bookCollection.forEach((book, index) => {
    // Create a new list item element for each book
    const listItem = document.createElement('li');
    listItem.textContent = `${book.title} by ${book.author}`;

    // Add a button to remove the book
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeBook(index));

    // Append the remove button to the list item
    listItem.appendChild(removeButton);

    // Append the list item to the book list
    bookList.appendChild(listItem);
  });
}

// Function to remove a book from the collection based on its index
function removeBook(index) {
  // Remove the book at the specified index from the bookCollection array
  bookCollection.splice(index, 1);

  // Update the book list in the UI
  displayBookList();
  saveBookCollection();

}
// Function to save the book collection to localStorage
function saveBookCollection() {
    localStorage.setItem('bookCollection', JSON.stringify(bookCollection));
  }
  
  // Function to load the book collection from localStorage
  function loadBookCollection() {
    const storedCollection = localStorage.getItem('bookCollection');
    return storedCollection ? JSON.parse(storedCollection) : [];
  }
  
  // Call the displayBookList function to initially display the books in the collection
  displayBookList();
