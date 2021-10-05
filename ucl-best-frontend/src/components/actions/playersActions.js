
export const fetchPlayers = (players, fantasyTeam) => {
    return (dispatch) => {
        
        dispatch({type: 'FETCH_PLAYERS', playersKey: players, fantasyTeamKey: fantasyTeam})
    }
}

export const togglePlayerAdded = (player) => {
    return (dispatch) => {
        dispatch({type: 'TOGGLE_PLAYER', playerKey: player})
    }
}