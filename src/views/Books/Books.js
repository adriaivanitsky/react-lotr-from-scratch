import React, { useEffect, useState } from 'react';
import BookList from '../../components/BookList.js';
import { getBooks } from '../../services/getBooks.js';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks(setBooks);
    console.log(books);
  }, []);
  //get books from API using fetch and pass the books to <BookList/>
  return (
    <div>
      <h1>this is the books page</h1>
      <BookList books={books} />
    </div>
  );
}
