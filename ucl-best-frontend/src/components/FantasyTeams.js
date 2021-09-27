
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams } from './actions/fantasyTeamAction'
import FantasyTeam from './fantasyTeams-components/FantasyTeam'

 class FantasyTeams extends Component {

    componentDidMount() {
        this.props.fetchFantasyTeams()
    }
 

    render() {
        const fantasyTeams = this.props.fantasyTeams.map( (fantasyTeam) => <FantasyTeam fantasyTeam={fantasyTeam}/>)
        
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
