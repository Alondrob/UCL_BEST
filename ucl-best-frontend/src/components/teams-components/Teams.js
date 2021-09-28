
import React from 'react';
import TeamList from './TeamList';
import {connect} from 'react-redux'
import { fetchTeams } from '../actions/teamAction'




class Teams extends React.Component {

   
    
    componentDidMount() {
        this.props.fetchTeams()
    }
    render() {
        return (
            <div className="App">
                {/* <PlayerSelection /> */}
                <TeamList teams={this.props.teams} />
            </div>
        );
        
    }
}

const mapStateToProps = (state) => {
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
