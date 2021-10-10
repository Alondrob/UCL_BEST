import React, {useState} from "react"
import { deleteFantasyTeamPlayer } from "../actions/fantasyTeamAction"
import { connect } from "react-redux"
import PlayerDetail from "./PlayerDetail"
import { togglePlayerAdded } from "../actions/playersActions"
import './Player.css'


const FantasyTeamPlayer = (props) => {

    const [showPlayerDetails, setShowPlayerDetails] = useState(false)
    const deletePlayer = () => {
        props.deleteFantasyTeamPlayer(props.fantasyTeamPlayer.id)
        props.togglePlayerAdded(props.fantasyTeamPlayer.player)
    }
    return (
        <React.Fragment>
            <p><span className="fantasy-team-player-name" onClick={() => setShowPlayerDetails(!showPlayerDetails)}>{props.fantasyTeamPlayer.player.name}</span> &nbsp;<br></br><br></br>
                <button className="delete-player-button" onClick={deletePlayer}> Delete Player </button></p>
        {showPlayerDetails && <PlayerDetail player={props.fantasyTeamPlayer.player}/>}
        </React.Fragment>
    )

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        deleteFantasyTeamPlayer: (fantasyTeamPlayerId) => dispatch(deleteFantasyTeamPlayer(fantasyTeamPlayerId)),
        togglePlayerAdded: (player) => dispatch(togglePlayerAdded(player)) 
    }
}




export default connect(null, mapDispatchToProps)(FantasyTeamPlayer)