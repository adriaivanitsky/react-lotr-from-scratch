import React, { useEffect, useState } from 'react';
import CharacterList from '../../components/CharacterList';
import { getCharacters } from '../../services/getCharacters';
import Controls from '../../components/Controls';

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState([]);
  const [race, setRace] = useState('All');

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCharacters(race);
      setCharacters(data);
    };
    fetchData();
  }, [race]);

  const eventListener = async () => {
    const data = await getCharacters(race, search);
    setCharacters(data);
  };

  return (
    <div>
      <h1>this is the characters page</h1>
      <Controls {...{ search, setSearch, race, setRace, eventListener }} />
      <CharacterList characters={characters} />
    </div>
  );
}
