
import React, { useState } from 'react';
import PlayerDetail from './PlayerDetail';

function Player({ player, players, setPlayers }) {
    // console.log(player)
    const [showDetails, setShowDetails] = useState(false)



    return (
        <div>

            <p onClick={() => {
                setPlayers([player])
                setShowDetails(!showDetails)

            }}
            >
                {player.name}
            </p>
            {showDetails ?
                <PlayerDetail player={player} /> : null}
        </div>
    )
}


export default Player