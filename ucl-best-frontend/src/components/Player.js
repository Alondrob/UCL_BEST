
import React, { useState } from 'react';
import PlayerDetail from './PlayerDetail';

function Player({ player }) {
    // console.log(player)
    const [showDetails, setShowDetails] = useState(false)



    return (
        <div>

            <p onClick={() => {
               
                setShowDetails(!showDetails)

            }}
            >
                {player.name}
            </p>
            
            {showDetails && <PlayerDetail player={player} />  }
        </div>
    )
}


export default Player