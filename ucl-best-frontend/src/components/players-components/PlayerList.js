
import React from 'react'
import Player from './Player'


export default function PlayerList({ players, fantasyTeam }) {


    return (
        <div>
            {players.map(player => <Player key={player.id} player={player} fantasyTeam={fantasyTeam}  />)}

        </div>
    )
}
