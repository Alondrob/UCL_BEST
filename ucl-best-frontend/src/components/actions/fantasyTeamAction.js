
export const fetchFantasyTeams = () => {
    return (dispatch) => {
        fetch('http://127.0.0.1:3000/fantasy_teams')
            .then(res => res.json())
            .then(fantasyTeams => dispatch({ type: 'FETCH_FANTASY_TEAMS', fantasyTeams: fantasyTeams }))
    }
}


export const createFantasyTeam = (fantasyTeam) => {
    return (dispatch) => {
       return fetch('http://127.0.0.1:3000/fantasy_teams',{
            method: 'post', 
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({fantasy_team: fantasyTeam})
            //Brandon please explain the data here
        })
            .then(res => res.json())
            .then(fantasyTeam => dispatch({ type: 'CREATE_FANTASY_TEAM', fantasyTeamKey: fantasyTeam }))
    }
}



export const editFantasyTeam = (fantasyTeam) => {
    
    return (dispatch) => {
        return fetch(`http://localhost:3000/fantasy_teams/${fantasyTeam.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify({ fantasy_team: fantasyTeam })
        })
        .then(res => res.json())
        .then(fantasyTeam => dispatch({ type: 'EDIT_FANTASY_TEAM', fantasyTeamKey: fantasyTeam }))
    }
}

export const deleteFantasyTeam = (fantasyTeam) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/fantasy_teams/${fantasyTeam.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
           
        })
        dispatch({ type: 'DELETE_FANTASY_TEAM', id: fantasyTeam.id })
    }
}


export const addFantasyTeamPlayer = (fantasyTeamPlayer) => {
    return (dispatch) => {
        fetch('http://localhost:3000/fantasy_team_players', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'   
            },
            body: JSON.stringify({ fantasy_team_player: fantasyTeamPlayer })
        })
        .then(res => res.json())
        .then(fantasyTeamPlayer => dispatch({type: 'ADD_FANTASY_TEAM_PLAYER', fantasyTeamPlayerKey: fantasyTeamPlayer}))
    }
}


export const deleteFantasyTeamPlayer = (fantasyTeamPlayerId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/fantasy_team_players/${fantasyTeamPlayerId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            
        })
             dispatch({ type: 'DELETE_FANTASY_TEAM_PLAYER', fantasyTeamPlayerIdKey: fantasyTeamPlayerId })
    }
}

        export const sortTeams = () => {
            return (dispatch) => {
                dispatch({type: 'SORT_TEAMS'})
            }
        }


        export const backwardsTeams = () => {
            return (dispatch) => {
                dispatch({ type: "BACKWARDS_TEAMS" })
            }
        }

        export const filterPosition = () => {
            return (dispatch) => {
                dispatch({ type: 'FILTER_POSITIONS' })
            }
        }

        export const searchedTeams = (userInput) => {
            return (dispatch) => {
                dispatch({type: 'SEARCHED_TEAMS', searchedTeams: userInput})
            }
        }
        export const filteredByPlayers = () => {
            return(dispatch) => {
                dispatch({type: 'FILTER_BY_PLAYERS'})
            }
        }