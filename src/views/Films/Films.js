import React, { useEffect, useState } from 'react';
import FilmList from '../../components/FilmList';
import { getFilms } from '../../services/films.js';

export default function Films() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    getFilms(setFilms);
  }, []);
  return (
    <div>
      <FilmList films={films} />
    </div>
  );
}
