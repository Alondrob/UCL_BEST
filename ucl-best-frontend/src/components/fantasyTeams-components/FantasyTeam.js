import React, { useState } from 'react'
import { deleteFantasyTeam, fetchFantasyTeams } from '../actions/fantasyTeamAction'
import EditForm from './EditForm'
import { connect } from 'react-redux'
import Teams from '../teams-components/Teams'
import { Link } from 'react-router-dom'
import './FantasyTeam.css'

// import fantasyTeamAction from '../actions/fantasyTeamAction'

// console.log({fantasyTeam})
const FantasyTeam = ({ fantasyTeam, setComparedTeams }) => {


    // console.log('FantasyTeam.js', fantasyTeam)

    return (
        <React.Fragment>
            <p >
                <button onClick={() => setComparedTeams(fantasyTeam)}> Compare Players </button>
                <Link to={`/fantasy_teams/${fantasyTeam.id}`}>
                    <span className="all-fantasy-teams">{fantasyTeam.name}</span> <br></br>

                </Link>
            </p>


        </React.Fragment>
    )

}



export default FantasyTeam


