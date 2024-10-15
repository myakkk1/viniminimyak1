import React, { useState, useEffect } from'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Call API to get list of books
    fetch('/api/books')
     .then((response) => response.json())
     .then((data) => setBooks(data))
     .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;