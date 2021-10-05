
import React from 'react';
import TeamList from './TeamList';
import {connect} from 'react-redux'
import { fetchTeams } from '../actions/teamAction'


class Teams extends React.Component {
   
    componentDidMount() {
        this.props.fetchTeams()
       
    }
    render() {
        console.log('teams.js', this.props)
        // console.log(this.props.teams)
        return (
            <div >
                {/* <PlayerSelection /> */}
                <TeamList teams={this.props.teams} fantasyTeam={this.props.fantasyTeam} />
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
    console.log('mapstatettoProps', state)
    return {
        teams: state.teamReducer.teams
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTeams: () => dispatch(fetchTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Teams)
