import { searchedTeams } from "../actions/fantasyTeamAction"
import FantasyTeam from "../fantasyTeams-components/FantasyTeam"

const fantasyTeamReducer = (state = { fantasyTeams: [], filteredTeams: [] }, action) => {
    switch (action.type) {
        case "FETCH_FANTASY_TEAMS":
            return {
                fantasyTeams: action.fantasyTeams, 
                filteredTeams: action.fantasyTeams
            }
        case "CREATE_FANTASY_TEAM":
            return {
                fantasyTeams: [...state.fantasyTeams, action.fantasyTeamKey],
                filteredTeams: [...state.fantasyTeams, action.fantasyTeamKey]
            }

        case "EDIT_FANTASY_TEAM":
            const editedFantasyTeams = state.fantasyTeams.map((fantasyTeam) =>
                fantasyTeam.id === action.fantasyTeamKey.id ? action.fantasyTeamKey : fantasyTeam)
            return {
                fantasyTeams: editedFantasyTeams,
                filteredTeams: editedFantasyTeams
            }

        case "DELETE_FANTASY_TEAM":
            // debugger
            const fantasyTeams = state.fantasyTeams.filter(fantasyTeam => fantasyTeam.id !== action.id)
            return {
                fantasyTeams: fantasyTeams,
                filteredTeams: fantasyTeams
            }

        case "ADD_FANTASY_TEAM_PLAYER":
            const updatedFantasyTeam = state.fantasyTeams.find(fantasyTeam => fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id)
            updatedFantasyTeam.players.push(action.fantasyTeamPlayerKey.player)
            updatedFantasyTeam.fantasy_team_players.push(action.fantasyTeamPlayerKey)
            const updatedFantasyTeams = state.fantasyTeams.map((fantasyTeam) =>
                fantasyTeam.id === action.fantasyTeamPlayerKey.fantasy_team.id ? updatedFantasyTeam : fantasyTeam)
            return {
                fantasyTeams: updatedFantasyTeams,
                filteredTeams: updatedFantasyTeam
            }

            case "DELETE_FANTASY_TEAM_PLAYER":
            const fantasyTeamPlayerIdKey = parseInt(action.fantasyTeamPlayerIdKey)

            let fantasyTeamsArray = state.fantasyTeams.find(fantasyTeam => fantasyTeam.fantasy_team_players.map(fantasyTeamPlayer => fantasyTeamPlayer.id).includes(fantasyTeamPlayerIdKey))
            
                fantasyTeamsArray.fantasy_team_players = fantasyTeamsArray.fantasy_team_players.filter(fantasyTeamPlayer => fantasyTeamPlayer.id != fantasyTeamPlayerIdKey)
                return {
                    fantasyTeams: state.fantasyTeams.map(fantasyTeam => fantasyTeam.id === fantasyTeamsArray.id ? fantasyTeamsArray : fantasyTeam),
                    filteredTeams: state.fantasyTeams.map(fantasyTeam => fantasyTeam.id === fantasyTeamsArray.id ? fantasyTeamsArray : fantasyTeam)
                }
            case "SORT_TEAMS":
                
                const sortedTeams = state.fantasyTeams.sort((a, b) => { if (a.name < b.name) {
                    return -1;
                  }
                  else if (a.name > b.name) {
                      return 1;
                  }
                  else {
                      return 0;
                  }
            })
                return {
                    fantasyTeams: [...sortedTeams],
                    filteredTeams: [...sortedTeams]
                }

            case 'BACKWARDS_TEAMS':
                const backwardsTeams = state.fantasyTeams.sort((a, b) => {
                    if (a.name < b.name) {
                        return 1;
                    }
                    else if (a.name > b.name) {
                        return -1;
                    }
                    else {
                        return 0;
                    }
                })
                return {
                    fantasyTeams: [...backwardsTeams],
                    filteredTeams: [...backwardsTeams]
                }

                case 'FILTER_POSITIONS':
            const positions = ['Goalkeeper', 'Defender', 'Midfielder', 'Attacker']


                    return {
                        fantasyTeams: state.fantasyTeams.map(fantasyTeam => {
                            return {
                                ...fantasyTeam, 
                                fantasy_team_players: [...fantasyTeam.fantasy_team_players.sort((a, b) => positions.indexOf(a.player.position) - positions.indexOf(b.player.position))  ]
                            }
                        }),
                        filteredTeams: state.fantasyTeams.map(fantasyTeam => {
                            return {
                                ...fantasyTeam,
                                fantasy_team_players: [...fantasyTeam.fantasy_team_players.sort((a, b) => positions.indexOf(a.player.position) - positions.indexOf(b.player.position))]
                            }
                        })
                    }


                case 'SEARCHED_TEAMS':
                   
                return {
                    fantasyTeams: state.fantasyTeams,
                    filteredTeams: [...state.fantasyTeams.filter(fantasyTeam => fantasyTeam.name.toLowerCase().includes(action.searchedTeams.toLowerCase()))]
                }
         


        default:
            return state;
    }
}

export default fantasyTeamReducer