
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
