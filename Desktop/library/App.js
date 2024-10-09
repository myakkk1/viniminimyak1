import React, { useState } from 'react';

const booksData = [
  { id: 1, title: '1984', author: 'George Orwell', available: true },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', available: true },
  { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', available: true },
];

const App = () => {
  const [books, setBooks] = useState(booksData);

  const handleCheckout = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, available: false } : book
    ));
  };

  const handleReturn = (id) => {
    setBooks(books.map(book =>
      book.id === id ? { ...book, available: true } : book
    ));
  };

  return (
    <div>
      <h1>Библиотека</h1>
      <h2>Доступные книги:</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <h3>{book.title}</h3>
            <p>Автор: {book.author}</p>
            <p>Статус: {book.available ? 'Доступна' : 'На руках'}</p>
            {book.available ? (
              <button onClick={() => handleCheckout(book.id)}>Выдать</button>
            ) : (
              <button onClick={() => handleReturn(book.id)}>Вернуть</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
