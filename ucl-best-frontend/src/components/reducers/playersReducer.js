
const playersReducer = (state = { players: [] }, action) => {
    switch (action.type) {
        case 'FETCH_PLAYERS':
            const players = action.playersKey.map(player => {
                const playerAdded = action.fantasyTeamKey.players.find(fantasyTeamPlayer => fantasyTeamPlayer.id === player.id) != undefined
                player.added = playerAdded
                return player
            })
            return {
                players: players
            }

        case 'TOGGLE_PLAYER':
            const updatedPlayers = state.players.map(player => {
                if (player.id === action.playerKey.id) {

                    action.playerKey.added = !player.added
                    return action.playerKey
                } else {
                    return player
                }
            })
            return {
                players: [...updatedPlayers]
            }

        default: return state;
    }
}

export default playersReducer;