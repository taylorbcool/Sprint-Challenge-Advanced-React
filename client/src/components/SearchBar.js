import React, { useState, useEffect } from "react";
import Player from "./Player";
import useDarkMode from '../hooks/useDarkMode'

export default function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  console.log(props.array);
  const players = props.array;

  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  
  useEffect(() => {
    const results = players.filter(player =>
      player.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className='flex'>
        <div className='header'>    
            <form>
                <label htmlFor="name">Search:</label>{' '}
                <input
                id="name"
                type="text"
                name="textfield"
                placeholder="Enter player name"
                value={searchTerm}
                onChange={handleChange}
                />
            </form>
            <div className="dark-mode__toggle">
                <div
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
                />
            </div>
        </div>
        <div>
            <ul>
            {searchTerm === "" ? players.map((player) => {
                    return(
                        <Player key={player.id} player={player} />
                    )
                }) : searchResults.map(player => (
                <Player player={player} />
            ))}
            </ul>
        </div>
    </div>
  );
}
