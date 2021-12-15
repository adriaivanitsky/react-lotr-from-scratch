import React, { useEffect, useState } from 'react';
import BookList from '../../components/BookList.js';
import { getBooks } from '../../services/books-route.js';

export default function Books() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getBooks();
  }, []);
  //get books from API using fetch and pass the books to <BookList/>
  return (
    <div>
      <BookList />
    </div>
  );
}
