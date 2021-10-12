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
        
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
        console.log(this.state.comparedTeams)

        return (
            <div className='fantasy-team-backround'>
                <h1 className="ft-header"> <span className="fantasy-teams-header">Fantasy Teams  </span></h1>
                
                    <span >{fantasyTeams} <br></br><br></br></span>
                
               
                
             
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

