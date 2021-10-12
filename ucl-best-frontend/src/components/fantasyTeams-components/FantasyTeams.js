import React, { Component } from 'react'
import { connect } from 'react-redux'
import { backwardsTeams, fetchFantasyTeams, sortFantasyTeams, searchFantasyTeams } from '../actions/fantasyTeamAction'
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
            if (this.state.sortedTeams) {
                this.props.sortFantasyTeams()
            }
            else {
                this.props.backwardsTeams()
            }
            this.setState({
                sortedTeams: !this.state.sortedTeams
            })
        }
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
        console.log(this.state.comparedTeams)

        const searchFantasyTeams = (event) => {
            const userInput = event.target.value
            this.props.seachedTeams(userInput)
        }

        const changeColor = (event) => {
            // document.body.style.background = 'pink'
            // event.target.classList.toggle('red')
            document.body.classList.toggle('red')
        }
      

        return (
            <div className='fantasy-team-backround'>
                <button onClick={changeColor}>Change Color</button>
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
                <label > Search Bar </label>
                <input onChange={searchFantasyTeams} type="text"/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fantasyTeams: state.fantasyTeamReducer.filteredTeams
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFantasyTeams: () => dispatch(fetchFantasyTeams()),
        sortFantasyTeams: () => dispatch(sortFantasyTeams()),
        backwardsTeams: () => dispatch(backwardsTeams()),
        seachedTeams: (userInput) => dispatch(searchFantasyTeams(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

