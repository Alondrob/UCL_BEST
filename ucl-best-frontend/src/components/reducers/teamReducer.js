const teamReducer = (state = { teams: []}, action) => {
    switch(action.type) {
        case "FETCH_TEAMS":
            return {
                teams: action.teams
            }
        default:
            return state;
    }
}

export default teamReducer

