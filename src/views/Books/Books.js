import React, { useEffect, useState } from 'react';
import BookList from '../../components/BookList.js';
import { fetchBooks } from '../../services/books-route.js';

export default function Books() {
  //get books from API using fetch and pass the books to <BookList/>
  return (
    <div>
      <BookList />
    </div>
  );
}
