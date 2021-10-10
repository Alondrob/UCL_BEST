
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFantasyTeam, deleteFantasyTeamPlayer } from '../actions/fantasyTeamAction'
import EditForm from './EditForm'
import Teams from '../teams-components/Teams'
import FantasyTeamPlayer from '../players-components/fantasyTeamPlayer'
import './FantasyTeam.css'

const FantasyTeamShow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const [showTeams, setShowTeams] = useState(false)
    const [showPlayersState, setShowPlayers] = useState(false)
    

    const onEdit = () => {
        setShowEditForm(!showEditForm)
    }

    const onDelete = () => {
        props.deleteFantasyTeam(fantasyTeam)
        window.location.href = "/fantasy_teams"
    }

    const renderTeams = () => {
        setShowTeams(!showTeams)
    }

    // console.log('FT SHOW', props)
    const fantasyTeam = props.fantasyTeams.find(fantasyTeam => fantasyTeam.id === parseInt(props.match.params.id))

    const showPlayers = () => {
        setShowPlayers(!showPlayersState)
    }

  
    // console.log('FantasyTeamShow.js', this.props)
    // console.log('mapStateToProps', props.state)
    return (
        <div id="fantasy-team-show">
            
                <p > 
                    <span className='team-details'>{fantasyTeam.nickname}</span>
                </p>
                <p >
                    <span className='team-details'> {fantasyTeam.color}</span> 
                </p>
                <p >
                    <span className='team-details'>{fantasyTeam.country}</span>
                </p>

                
            {showTeams && <Teams fantasyTeam={fantasyTeam} />}
            {showEditForm && <EditForm fantasyTeam={fantasyTeam} setShowEditForm={setShowEditForm} />}

            {showPlayersState && <React.Fragment>
                <h1>Players</h1>
                {fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => <FantasyTeamPlayer key={fantasyTeamPlayer.id} fantasyTeamPlayer={fantasyTeamPlayer} />)}
                </React.Fragment>}
            
                <button className="fantasy-team-buttons" onClick={showPlayers}> Present Team's Players </button>
                <button className="fantasy-team-buttons" onClick={onEdit}> Edit Team </button>

                <button className="fantasy-team-buttons" onClick={onDelete}> Delete Team </button>

                <button className="fantasy-team-buttons" onClick={renderTeams}> Add Players </button>
            

            
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fantasyTeams: state.fantasyTeamReducer.fantasyTeams,
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFantasyTeam: (fantasyTeam) => dispatch(deleteFantasyTeam(fantasyTeam)),
        deleteFantasyTeamPlayer: (fantasyTeamPlayerId) => dispatch(deleteFantasyTeamPlayer(fantasyTeamPlayerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeamShow)
