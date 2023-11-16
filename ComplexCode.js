/* File Name: ComplexCode.js
 * Description: This code demonstrates a complex implementation of a library management system.
 */

// Library Class
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.books = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }

  searchBookByTitle(title) {
    return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  searchBookByAuthor(author) {
    return this.books.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
  }

  displayAllBooks() {
    this.books.forEach(book => console.log(`Title: ${book.title} | Author: ${book.author}`));
  }
}

// Book Class
class Book {
  constructor(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }

  displayDetails() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
    console.log(`Price: ${this.price}`);
  }
}

// Create library instance
const myLibrary = new Library("Awesome Library", "New York");

// Add books to the library
myLibrary.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", "Programming", 35));
myLibrary.addBook(new Book("Clean Code: A Handbook of Agile Software Craftsmanship", "Robert C. Martin", "Programming", 45));
myLibrary.addBook(new Book("The Alchemist", "Paulo Coelho", "Fiction", 20));

// Display all books in the library
console.log("All Books in Library:");
myLibrary.displayAllBooks();

// Search books by author
console.log("\nBooks by Author 'Robert C. Martin':");
const booksByAuthor = myLibrary.searchBookByAuthor("Robert C. Martin");
booksByAuthor.forEach(book => book.displayDetails());

// Remove a book from the library
const bookToRemove = myLibrary.searchBookByTitle("The Alchemist")[0];
myLibrary.removeBook(bookToRemove);

// Display all books after removal
console.log("\nAll Books in Library after Removal:");
myLibrary.displayAllBooks();