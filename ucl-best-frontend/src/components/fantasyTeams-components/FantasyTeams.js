import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams, sortFantasyTeams, sortFantasyTeamsBackwards, searchBar } from '../actions/fantasyTeamAction'
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
        const sortTeams = () => {
            this.props.sortFantasyTeams()
        }

        const sortTeamsBackwards = () => {
            this.props.sortFantasyTeamsBackwards()
        }

        const teamSearch = (e) => {
           const userInput = e.target.value
            this.props.searchBar(userInput)
        }
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
        console.log(this.state.comparedTeams)

        return (
            <div className='fantasy-team-backround'>
                <h1 className="ft-header"> <span className="fantasy-teams-header">Fantasy Teams  </span></h1>
                
                    <span >{fantasyTeams} <br></br><br></br></span>
                
                <button onClick={sortTeams}> sort Teams </button>
                <button onClick={sortTeamsBackwards}> sort Teams Backwards </button>

                <label> Search Bar</label>
                <input onChange={teamSearch} type="text"/>
                
             
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
        sortFantasyTeams: () => dispatch(sortFantasyTeams()),
        sortFantasyTeamsBackwards: () => dispatch(sortFantasyTeamsBackwards()),
        searchBar: (userInput) => dispatch(searchBar(userInput))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

