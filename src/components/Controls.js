import React from 'react';

export default function Controls({ search, setSearch, eventListener, race, setRace }) {
  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={eventListener}>Search</button>
      <select value={race} onChange={(e) => setRace(e.target.value)}>
        <option value="All">all</option>
        <option value="Dwarf">dwarf</option>
        <option value="Elf">elf</option>
        <option value="Hobbit">hobbit</option>
        <option value="Human">human</option>
        <option value="Maiar">maiar</option>
        <option value="Orc">orc</option>
      </select>
    </div>
  );
}
