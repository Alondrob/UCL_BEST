
import PlayerList from '../players-components/PlayerList.js';
import React, { useState } from 'react';
import './Team.css'


function Team({ team, fantasyTeam}) {
    const [showPlayers, setShowPlayers] = useState(false)
    const onClick = () => {
        setShowPlayers(!showPlayers)
    }
    // console.log({team})

    console.log('Team.js', team)
    return (
        <div className="selected-team">
            <p> 
                <span className='selected-team'>{team.name}</span>
            </p>
            <a href={team.website} target="_blank"> {team.website}</a><br></br>
            <a href={`mailto:${team.email}`}> Email Us </a><br></br>
            <button className="show-players-button" onClick={onClick}> Show Players</button><br></br>
            {showPlayers && <PlayerList players={team.players} fantasyTeam={fantasyTeam} />}
        </div>
    );
}

export default Team