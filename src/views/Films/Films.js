import React, { useEffect, useState } from 'react';
import FilmList from '../../components/FilmList';
import { getFilms } from '../../services/getFilms.js';

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getFilms(setFilms);
  }, []);
  return (
    <div>
      <h1>this is the films page</h1>
      <FilmList films={films} />
    </div>
  );
}
