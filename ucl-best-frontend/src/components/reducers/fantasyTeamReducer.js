import FantasyTeam from "../fantasyTeams-components/FantasyTeam"
import fantasyTeamPlayer from "../players-components/fantasyTeamPlayer"

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
            return {
                fantasyTeams: state.fantasyTeams.map(fantasyTeam => fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id ? {
                    ...updatedFantasyTeam, 
                    players: [
                        ...updatedFantasyTeam.players, 
                        action.fantasyTeamPlayerKey.player 
                    ],
                    fantasy_team_players: [
                        ...updatedFantasyTeam.fantasy_team_players, 
                        action.fantasyTeamPlayerKey
                    ]
                }
                    : fantasyTeam
                )
            }

         

            case "DELETE_FANTASY_TEAM_PLAYER":
            const fantasyTeamPlayerIdKey = parseInt(action.fantasyTeamPlayerIdKey)

            let deletingFantasyTeam = state.fantasyTeams.find(fantasyTeam => fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => fantasyTeamPlayer.id).includes(fantasyTeamPlayerIdKey))

            const deletingFantasyTeamPlayer = deletingFantasyTeam.fantasy_team_players.find(fantasyTeamPlayer => fantasyTeamPlayer.id === fantasyTeamPlayerIdKey)


            return {
                fantasyTeams: state.fantasyTeams.map(fantasyTeam => fantasyTeam.id === deletingFantasyTeam.id ? {
                    ...deletingFantasyTeam,
                    players: deletingFantasyTeam.players.filter(player => player.id != deletingFantasyTeamPlayer.player.id),
                    fantasy_team_players: deletingFantasyTeam.fantasy_team_players.filter(fantasyTeamPlayer => fantasyTeamPlayer.id != fantasyTeamPlayerIdKey)
                }
                    : fantasyTeam
                )
            }

        default:
            return state;
    }
}

export default fantasyTeamReducer



