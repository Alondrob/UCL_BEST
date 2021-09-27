
import React from 'react'
import Player from './Player'


export default function PlayerList({ players }) {


    return (
        <div>
            {players.map(player => <Player key={player.id} player={player}  />)}

        </div>
    )
}
