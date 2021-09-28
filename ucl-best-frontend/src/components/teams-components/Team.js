
import PlayerList from '../players-components/PlayerList.js';
import React, { useState } from 'react';


function Team({ team }) {
    const [showPlayers, setShowPlayers] = useState(false)
    const onClick = () => {
        setShowPlayers(!showPlayers)
    }

    console.log({team})

  
    return (
        <div>
            <p> {team.name}

            </p>
            <a href={team.website} target="_blank"> {team.website}</a><br></br>
            <a href={`mailto:${team.email}`}> Email Us </a><br></br>
            <button onClick={onClick}> Show Players</button>
            {showPlayers && <PlayerList players={team.players} />}
        </div>
    );
}

export default Team