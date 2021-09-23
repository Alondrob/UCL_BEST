import { Component } from 'react';
import PlayerList from './PlayerList';
import React, { useState } from 'react';
import NewPlayerForm from './NewPlayerForm';

function Team({ team }) {
    const [players, setPlayers] = useState([])
    const [newPlayerForm, setNewPlayerForm] = useState(false)
    const onClick = () => {
        fetch(`https://api.football-data.org/v2/teams/${team.id}`,
            {
                method: 'get',
                mode: 'cors',
                headers: {
                    'x-auth-token': '79ed90e3adb84566a10136976e3b54ad',
                    'accept': 'application/json'
                }
            }
        )
            .then(res => res.json())

            // .then(data => console.log(data))
            .then(data => (setPlayers(data.squad)))
    }

    const openForm = () => {
        setNewPlayerForm(!newPlayerForm)
    }

    const addPlayer = (player) => {
        const allPlayers = [player, ...players]
        setPlayers(allPlayers)
    }
    return (
        <div>
            <p> {team.name}

            </p>
            <a href={team.website} target="_blank"> {team.website}</a><br></br>
            <a href={`mailto:${team.email}`}> Email Us </a><br></br>
            <button onClick={onClick}> Show Players</button>
            <button onClick={openForm}> Add A Player</button>
            {newPlayerForm && <NewPlayerForm addPlayer={addPlayer} />}
            <PlayerList players={players} setPlayers={setPlayers} />
        </div>
    );
}

export default Team