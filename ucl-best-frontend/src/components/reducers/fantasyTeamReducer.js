import FantasyTeam from "../fantasyTeams-components/FantasyTeam"

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

        case "EDIT_FANTASY_TEAM":
            const editedFantasyTeams = state.fantasyTeams.map((fantasyTeam) =>
                fantasyTeam.id === action.fantasyTeamKey.id ? action.fantasyTeamKey : fantasyTeam)
            return {
                fantasyTeams: editedFantasyTeams
            }

        case "DELETE_FANTASY_TEAM":
            const fantasyTeams = state.fantasyTeams.filter(fantasyTeam => fantasyTeam.id !== action.id)
            return {
                fantasyTeams: fantasyTeams
            }

        case "ADD_FANTASY_TEAM_PLAYER":
            const updatedFantasyTeam = state.fantasyTeams.find(fantasyTeam => fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id)
            updatedFantasyTeam.players.push(action.fantasyTeamPlayerKey.player)
            const updatedFantasyTeams = state.fantasyTeams.map((fantasyTeam) =>
                fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id ? updatedFantasyTeam : fantasyTeam)
            return {
                fantasyTeams: updatedFantasyTeams
            }

        default:
            return state;
    }
}

export default fantasyTeamReducer