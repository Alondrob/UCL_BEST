
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams } from '../actions/fantasyTeamAction'
import FantasyTeam from './FantasyTeam'

 class FantasyTeams extends Component {

    componentDidMount() {
        this.props.fetchFantasyTeams()
    }
    
    
    render() {
        console.log(this.props)
        const fantasyTeams = this.props.fantasyTeams.map( (fantasyTeam) => <FantasyTeam key={fantasyTeam.id} fantasyTeam={fantasyTeam}/>)
        
        return (
            <div>
                <h1> Your Teams </h1>
           {fantasyTeams}     
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