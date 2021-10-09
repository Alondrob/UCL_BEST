import React, {useState} from "react"
import { deleteFantasyTeamPlayer } from "../actions/fantasyTeamAction"
import { connect } from "react-redux"
import PlayerDetail from "./PlayerDetail"
import './Player.css'


const FantasyTeamPlayer = (props) => {

    const [showPlayerDetails, setShowPlayerDetails] = useState(false)
    const deletePlayer = () => {
        props.deleteFantasyTeamPlayer(props.fantasyTeamPlayer.id)
    }
    return (
        <React.Fragment>
            <p className="fantasy-team-player">
                
                <span onClick={() => setShowPlayerDetails(!showPlayerDetails)}>     
                    <span className="fantasy-team-player-name">{props.fantasyTeamPlayer.player.name}</span><br></br><br></br>
                    <button className='delete-player-button' onClick={deletePlayer}> Delete Player </button><br></br>
                </span> &nbsp;<br></br>
                
                
            </p>
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