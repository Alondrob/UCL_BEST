
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFantasyTeam, deleteFantasyTeamPlayer } from '../actions/fantasyTeamAction'
import EditForm from './EditForm'
import Teams from '../teams-components/Teams'

const FantasyTeamShow = (props) => {
    const [showEditForm, setShowEditForm] = useState(false)
    const [showTeams, setShowTeams] = useState(false)
    const [showPlayersState, setShowPlayers] = useState(false)

    const onEdit = () => {
        setShowEditForm(!showEditForm)
    }

    const onDelete = () => {
        deleteFantasyTeam(fantasyTeam)
    }

    const renderTeams = () => {
        setShowTeams(!showTeams)
    }

    
    const fantasyTeam = props.fantasyTeams.find(fantasyTeam => fantasyTeam.id === parseInt(props.match.params.id))

    const showPlayers = () => {
        setShowPlayers(!showPlayersState)
    }

    const deletePlayer = (event) => {
        props.deleteFantasyTeamPlayer(event.target.dataset.id)
    }
    console.log(fantasyTeam)
    return (
        <div>
            <p> {fantasyTeam.nickname}</p>
            <p> {fantasyTeam.color}</p>
            <p> {fantasyTeam.country}</p>
            {showPlayersState && <React.Fragment>
                <h1>Players</h1>
                {fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => <p>{fantasyTeamPlayer.player.name} &nbsp;<button data-id={fantasyTeamPlayer.id} onClick={deletePlayer}> Delete Player </button></p>)}
                </React.Fragment>}
            <button onClick={showPlayers}> Present Team's Players </button>
            <button onClick={onEdit}> Edit Team </button>
            <button onClick={onDelete}> Delete Team </button>
            <button onClick={renderTeams}> Add Players </button>
            {showTeams && <Teams fantasyTeam={fantasyTeam} />}
            {showEditForm && <EditForm fantasyTeam={fantasyTeam} setShowEditForm={setShowEditForm} />}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        fantasyTeams: state.fantasyTeamReducer.fantasyTeams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteFantasyTeam: (fantasyTeam) => dispatch(deleteFantasyTeam(fantasyTeam)),
        deleteFantasyTeamPlayer: (fantasyTeamPlayerId) => dispatch(deleteFantasyTeamPlayer(fantasyTeamPlayerId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeamShow)
