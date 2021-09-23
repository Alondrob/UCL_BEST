
import React from 'react'
import Player from './Player'


export default function PlayerList({ players, setPlayers }) {
    console.log(players)

    return (
        <div>
            {players.map(player => <Player key={player.id} player={player} players={players} setPlayers={setPlayers} />)}

        </div>
    )
}
