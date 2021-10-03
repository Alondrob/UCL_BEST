
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFantasyTeamPlayer } from '../actions/fantasyTeamAction';
import PlayerDetail from './PlayerDetail';

function Player({ player, addFantasyTeamPlayer, fantasyTeam }) {
    // console.log(player)
    const [showDetails, setShowDetails] = useState(false)
    const [playerAdded, setPlayerAdded] = useState(fantasyTeam.players.find(fantasyTeamPlayer => fantasyTeamPlayer.id === player.id) != undefined)

    const onclick = () => {
        if (fantasyTeam.fantasy_team_players.length < 11) {
            setPlayerAdded(true)
            addFantasyTeamPlayer({ player_id: player.id, fantasy_team_id: fantasyTeam.id })
        } 
        else {
            alert("You Can have no more than 11 Players on one Team")
        }
        
    }


   
    return (
        <div>

            <p 
            >
                <span onClick={() => {
                    setShowDetails(!showDetails)
                }}>{player.name} 
                </span> &nbsp;
                {playerAdded ? <span> Player Added </span> : <button onClick={onclick}> Add A Player </button>}
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