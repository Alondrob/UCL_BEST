
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFantasyTeamPlayer } from '../actions/fantasyTeamAction';
import PlayerDetail from './PlayerDetail';

function Player({ player, addFantasyTeamPlayer, fantasyTeam }) {
    // console.log(player)
    const [showDetails, setShowDetails] = useState(false)

    const onclick = () => {
        addFantasyTeamPlayer({player_id: player.id, fantasy_team_id: fantasyTeam.id })
    }

    return (
        <div>

            <p 
            >
                <span onClick={() => {
                    setShowDetails(!showDetails)
                }}>{player.name} 
                </span> &nbsp;
                <button onClick={onclick}> Add A Player </button>
            </p>
            
            {showDetails && <PlayerDetail player={player} />  }

            
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFantasyTeamPlayer: (fantasyTeamPlayer) => dispatch(addFantasyTeamPlayer(fantasyTeamPlayer))
    }
}


export default connect(null, mapDispatchToProps)(Player)