
import React from 'react'
import Player from './Player'
import { connect } from 'react-redux'
import { fetchPlayers } from '../actions/playersActions'
import './Player.css'



class PlayerList extends React.Component {

    componentDidMount() {
        this.props.fetchPlayers(this.props.players, this.props.fantasyTeam)
    }
    render() {
        return (
            <div>
                {this.props.playersInState.map(player => <Player key={player.id} player={player} fantasyTeam={this.props.fantasyTeam}  />)}

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        playersInState: state.playersReducer.players
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPlayers: (players, fantasyTeam) => dispatch(fetchPlayers(players, fantasyTeam))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
