import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams, sortFantasyTeams } from '../actions/fantasyTeamAction'
import FantasyTeam from './FantasyTeam'
import './FantasyTeam.css'

class FantasyTeams extends Component {

    constructor() {
        super()
        this.state = {
            comparedTeams: []
        }
    }

    componentDidMount() {
        this.props.fetchFantasyTeams()
    }



    render() {
        const sortedTeams = () => {
            this.props.sortFantasyTeams()
        }
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
        console.log(this.state.comparedTeams)

        return (
            <div className='fantasy-team-backround'>
                <h1 > <span className="fantasy-teams-header">Your Teams </span></h1>
                <span >{fantasyTeams}</span>
                <button onClick={sortedTeams}> sort teams</button>
                
                {this.state.comparedTeams.map(fantasyTeam =>
                    <React.Fragment key={fantasyTeam.id}>
                        <h2> {fantasyTeam.name} </h2>
                        <ul>
                            {fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => <li key={fantasyTeamPlayer.id}>{fantasyTeamPlayer.player.name}</li>)}
                        </ul>
                    </React.Fragment>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fantasyTeams: state.fantasyTeamReducer.fantasyTeams
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFantasyTeams: () => dispatch(fetchFantasyTeams()),
        sortFantasyTeams: () => dispatch(sortFantasyTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

