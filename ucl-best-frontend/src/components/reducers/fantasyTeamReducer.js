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
            // debugger
            const fantasyTeams = state.fantasyTeams.filter(fantasyTeam => fantasyTeam.id !== action.id)
            return {
                fantasyTeams: fantasyTeams
            }

        case "ADD_FANTASY_TEAM_PLAYER":
            const updatedFantasyTeam = state.fantasyTeams.find(fantasyTeam => fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id)
            updatedFantasyTeam.players.push(action.fantasyTeamPlayerKey.player)
            updatedFantasyTeam.fantasy_team_players.push(action.fantasyTeamPlayerKey)
            const updatedFantasyTeams = state.fantasyTeams.map((fantasyTeam) =>
                fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id ? updatedFantasyTeam : fantasyTeam)
            return {
                fantasyTeams: updatedFantasyTeams
            }

            case "DELETE_FANTASY_TEAM_PLAYER":
            const fantasyTeamPlayerIdKey = parseInt(action.fantasyTeamPlayerIdKey)
            let fantasyTeamsArray = state.fantasyTeams.find(fantasyTeam => fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => fantasyTeamPlayer.id).includes(fantasyTeamPlayerIdKey))
            
                fantasyTeamsArray.fantasy_team_players = fantasyTeamsArray.fantasy_team_players.filter(fantasyTeamPlayer => fantasyTeamPlayer.id != fantasyTeamPlayerIdKey)
                return {
                    fantasyTeams: state.fantasyTeams.map(fantasyTeam => fantasyTeam.id === fantasyTeamsArray.id ? fantasyTeamsArray : fantasyTeam)
                }

            case 'SORT_FANTASY_TEAMS':
              
                const sortedTeams = state.fantasyTeams
                // .sort((a, b) => {
                
                //     if (a.name < b.name) {
                //         return 1
                //     }
                //     else if (a.name > b.name) {
                //         return -1
                //     }
                //     else {
                //         return 0
                //     }
                // }) 
            debugger
                    return {
                        fantasyTeams: sortedTeams.sort((a, b) => {

                            if (a.name < b.name) {
                                return 1
                            }
                            else if (a.name > b.name) {
                                return -1
                            }
                            else {
                                return 0
                            }
                        })
                    }
                

        default:
            return state;
    }
}

export default fantasyTeamReducer