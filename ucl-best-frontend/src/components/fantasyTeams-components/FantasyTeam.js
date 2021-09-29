
import React, {useState} from 'react'
import { deleteFantasyTeam, fetchFantasyTeams } from '../actions/fantasyTeamAction'
import EditForm from './EditForm'
import {connect} from 'react-redux'
import Teams from '../teams-components/Teams'
import { Link } from 'react-router-dom'

// import fantasyTeamAction from '../actions/fantasyTeamAction'

// console.log({fantasyTeam})
const FantasyTeam = ({fantasyTeam, deleteFantasyTeam}) => {

   

    
    return (
        <React.Fragment>
        <p >
            <Link to={`/fantasy_teams/${fantasyTeam.id}`}> 
            {fantasyTeam.name}
            </Link>
        </p>

      
        </React.Fragment>
    )
  
}



export default FantasyTeam


