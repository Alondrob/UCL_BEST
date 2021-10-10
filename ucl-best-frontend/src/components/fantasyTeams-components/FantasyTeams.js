import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams, sortTeams, backwardsTeams, searchedTeams} from '../actions/fantasyTeamAction'
import FantasyTeam from './FantasyTeam'
import { Link } from 'react-router-dom'
import './FantasyTeam.css'

class FantasyTeams extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filteredTeams: props.fantasyTeams,
            sortedTeams: false
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
        // const sortTeams = () => {
        //     this.props.backwardsTeams()
        // }

        // console.log("2", fantasyTeams2)

        return (
            <div className="fantasy-teams-backround">
                <h1 > <span className="fantasy-teams-header">Your Teams </span></h1>
                <span className='fantasy-teams-backround'>{fantasyTeams}</span>
                {/* <h1>{this.props.fantasyTeams[0]}</h1> */}
            <button onClick={filterTeams}> filter Teams </button>
                {/* <button onClick={sortTeams}> Sort Teams </button> */}
                <label> Search Bar </label>
                <input onChange={searchBar} type='text'/> 
                {/* {this.state.comparedTeams.map(fantasyTeam =>
                    <React.Fragment key={fantasyTeam.id}>
                        <h2> {fantasyTeam.name} </h2>
                        <ul>
                            {fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => <li key={fantasyTeamPlayer.id}>{fantasyTeamPlayer.player.name}</li>)}
                        </ul>
                    </React.Fragment>
                )} */}
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
        searchedTeams: (userInput) => dispatch(searchedTeams(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

