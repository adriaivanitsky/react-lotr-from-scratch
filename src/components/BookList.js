//map through books and display them
import React from 'react';

export default function BookList({ books }) {
  console.log(books);
  return (
    <div className="books">
      {books.map((book) => (
        <p key={book[0]}>{book[0]}</p>
      ))}
    </div>
  );
}
