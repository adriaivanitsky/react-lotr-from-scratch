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
        <option value="all">all</option>
        <option value="dwarf">dwarf</option>
        <option value="elf">elf</option>
        <option value="hobbit">hobbit</option>
        <option value="human">human</option>
        <option value="maiar">maiar</option>
        <option value="orc">orc</option>
      </select>
    </div>
  );
}
