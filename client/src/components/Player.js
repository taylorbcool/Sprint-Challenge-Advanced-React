import React from 'react';

export default function Player({player}){
    const { name, country, searches} = player
    
    return(
        <div className='card'>
            <h4>{name}</h4>
            <p>Country: {country}</p>
            <p>Searches: {searches}</p>
        </div>
    )
}