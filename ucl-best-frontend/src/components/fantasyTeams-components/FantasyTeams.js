import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams, sortTeams, backwardsTeams, searchedTeams, filteredByPlayers} from '../actions/fantasyTeamAction'
import FantasyTeam from './FantasyTeam'
import { Link } from 'react-router-dom'
import './FantasyTeam.css'

class FantasyTeams extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filteredTeams: props.fantasyTeams,
            sortedTeams: false,
            selectedPositions: []
        }
    }

    componentDidMount() {
        this.props.fetchFantasyTeams()
    
    }

    


    render() {
        console.log('fantasyTeam.js', this.props)
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
    //    console.log('array', this.props.fantasyTeams)

        // console.log('1', fantasyTeams)    

        // const fantasyTeams2 = this.props.fantasyTeams.map((newTeam) => <li>key={newTeam.id}, team={newTeam})</li>)

        const filterTeams = () => {
            // console.log(this.props.fantasyTeams)
            if(this.state.sortedTeams) {
                this.props.sortedTeams()
            }
            else {
                this.props.backwardsTeams()
            }
            this.setState({
                sortedTeams: !this.state.sortedTeams
            })
        }

        const searchBar = (event) => {
            const userInput = event.target.value 
            this.props.searchedTeams(userInput)
        }
       
        const numOfPlayers = () => {
            this.props.filteredByPlayers()
        }
       
        const findPosition = (event) => {
            const userSelection = event.target.value
            let players = []
            
             this.props.fantasyTeams.forEach(fantasyTeam => {
                 fantasyTeam.fantasy_team_players.forEach(fantasyTeamPlayer => {
                     
                     if (fantasyTeamPlayer.player.position === userSelection) {
                        players.push(fantasyTeamPlayer)
                     }
                 })
            })
            
            this.setState({
                selectedPositions: players
            })
        
        }

        return (
            <div className="fantasy-teams-backround">
                <h1 > <span className="fantasy-teams-header">Your Teams </span></h1>
                <span className='fantasy-teams-backround'>{fantasyTeams}</span>
                
                <button onClick={filterTeams}> filter Teams </button>&nbsp;
                <button onClick={numOfPlayers}> Filter By Number of Players </button>
                
                <label> Search Bar </label>
                <input onChange={searchBar} type='text'/> 

                <select onChange={findPosition}> 
                    <option value='Attacker'> Attacker </option>
                    <option value='Defender'> Defender </option>
                    <option value='Midfielder'> Midfielder </option>
                    <option value='Goalkeeper'> Goalkeeper </option>
                </select>
                {this.state.selectedPositions.map(fantasyTeamPlayer => <h1> {fantasyTeamPlayer.fantasy_team.name}: {fantasyTeamPlayer.player.name} </h1>)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        fantasyTeams: state.fantasyTeamReducer.filteredTeams,
        
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFantasyTeams: () => dispatch(fetchFantasyTeams()),
        sortedTeams: () => dispatch(sortTeams()),
        backwardsTeams: () => dispatch(backwardsTeams()),
        searchedTeams: (userInput) => dispatch(searchedTeams(userInput)),
        filteredByPlayers: () => dispatch(filteredByPlayers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

