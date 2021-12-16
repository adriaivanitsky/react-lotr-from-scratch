import React from 'react';

export default function CharacterList({ characters }) {
  return (
    <div>
      {characters.map((character) => (
        <p key={character.name}>{character.name}</p>
      ))}
    </div>
  );
}
