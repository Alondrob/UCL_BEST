
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams } from '../actions/fantasyTeamAction'
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
        const setComparedTeams = (fantasyTeam) => {
            this.setState({
                comparedTeams: [...this.state.comparedTeams, fantasyTeam]
            })
        }
        const fantasyTeams = this.props.fantasyTeams.map( (fantasyTeam) => <FantasyTeam setComparedTeams={setComparedTeams} key={fantasyTeam.id} fantasyTeam={fantasyTeam}/>)
        console.log(this.state.comparedTeams)
     
        return (
            <div className='fantasy-team-backround'>
                <h1 > <span className="fantasy-teams-header">Your Teams </span></h1>
                <span >{fantasyTeams}</span>
                <h1>Compare Fantasy Teams</h1>
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
        fetchFantasyTeams: () => dispatch(fetchFantasyTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 