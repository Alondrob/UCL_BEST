
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { deleteFantasyTeam, deleteFantasyTeamPlayer } from '../actions/fantasyTeamAction'
import EditForm from './EditForm'
import Teams from '../teams-components/Teams'
import FantasyTeamPlayer from '../players-components/fantasyTeamPlayer'

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

  
    console.log('FantasyTeamShow.js', this.props)
    return (
        <div>
            <p> {fantasyTeam.nickname}</p>
            <p> {fantasyTeam.color}</p>
            <p> {fantasyTeam.country}</p>
            {showPlayersState && <React.Fragment>
                <h1>Players</h1>
                {fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => <FantasyTeamPlayer fantasyTeamPlayer={fantasyTeamPlayer} />)}
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
