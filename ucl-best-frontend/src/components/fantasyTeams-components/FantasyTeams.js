import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchFantasyTeams, sortTeams} from '../actions/fantasyTeamAction'
import FantasyTeam from './FantasyTeam'
import { Link } from 'react-router-dom'
import './FantasyTeam.css'

class FantasyTeams extends Component {

    constructor(props) {
        super(props)

        this.state = {
            filteredTeams: props.fantasyTeams
        }
    }

    componentDidMount() {
        this.props.fetchFantasyTeams()
    
    }


    render() {
        // const setComparedTeams = (fantasyTeam) => {
        //     this.setState({
        //         comparedTeams: [...this.state.comparedTeams, fantasyTeam]
        //     })
        // }
        const fantasyTeams = this.props.fantasyTeams.map((fantasyTeam) => <FantasyTeam  key={fantasyTeam.id} fantasyTeam={fantasyTeam} />)
    //    console.log('array', this.props.fantasyTeams)

        console.log('1', fantasyTeams)    

        // const fantasyTeams2 = this.props.fantasyTeams.map((newTeam) => <li>key={newTeam.id}, team={newTeam})</li>)

        const filterTeams = () => {
            console.log(this.props.fantasyTeams)
            this.props.sortedTeams()
        }

        // console.log("2", fantasyTeams2)

        return (
            <div className="fantasy-teams-backround">
                <h1 > <span className="fantasy-teams-header">Your Teams </span></h1>
                <span className='fantasy-teams-backround'>{fantasyTeams}</span>
                {/* <h1>{this.props.fantasyTeams[0]}</h1> */}
            <button onClick={filterTeams}> filter Teams </button>
                
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
        fantasyTeams: state.fantasyTeamReducer.fantasyTeams
    }

}


const mapDispatchToProps = (dispatch) => {
    return {
        fetchFantasyTeams: () => dispatch(fetchFantasyTeams()),
        sortedTeams: () => dispatch(sortTeams())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FantasyTeams)


// // const dispatch = ( action ) => {
//     state = reducer(state, action)
//     return state;

// } 

