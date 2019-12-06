import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Player from './Player';
import SearchBar from './SearchBar';

const PlayerList = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/players')
        .then(res => {
            // console.log(res)
            setPlayers(res.data)
        })
        .catch(err => {
            console.log(`error fetching player data: ${err}`)
        })
        console.log(`getting players`)
        console.log(players)
    }, [])

    return(
        <div className='container'>
            <div>
                <SearchBar array={[...players]} />
            </div>
        </div>
    )
}

export default PlayerList