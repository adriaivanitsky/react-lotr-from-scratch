import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <p key={character[1]}>{character[1]}</p>
      ))}
    </div>
  );
}
