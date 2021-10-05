import React, {useState} from "react"
import { deleteFantasyTeamPlayer } from "../actions/fantasyTeamAction"
import { connect } from "react-redux"
import PlayerDetail from "./PlayerDetail"


const FantasyTeamPlayer = (props) => {

    const [showPlayerDetails, setShowPlayerDetails] = useState(false)
    const deletePlayer = () => {
        props.deleteFantasyTeamPlayer(props.fantasyTeamPlayer.id)
    }
    return (
        <React.Fragment>
        <p><span onClick={() => setShowPlayerDetails(!showPlayerDetails)}>{props.fantasyTeamPlayer.player.name}</span> &nbsp;<button  onClick={deletePlayer}> Delete Player </button></p>
        {showPlayerDetails && <PlayerDetail player={props.fantasyTeamPlayer.player}/>}
        </React.Fragment>
    )

    
}

const mapDispatchToProps = (dispatch) => {
    return {
        
        deleteFantasyTeamPlayer: (fantasyTeamPlayerId) => dispatch(deleteFantasyTeamPlayer(fantasyTeamPlayerId))
    }
}




export default connect(null, mapDispatchToProps)(FantasyTeamPlayer)