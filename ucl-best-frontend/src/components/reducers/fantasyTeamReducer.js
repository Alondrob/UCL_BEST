const fantasyTeamReducer = (state = { fantasyTeams: [] }, action) => {
    switch (action.type) {
        case "FETCH_FANTASY_TEAMS":
            return {
                fantasyTeams: action.fantasyTeams
            }
        case "CREATE_FANTASY_TEAM":
            return {
                fantasyTeams: [...state.fantasyTeams, action.fantasyTeamKey]
            }

        default:
            return state;
    }
} 

export default fantasyTeamReducer