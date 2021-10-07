
export const fetchTeams = () => {
    return ((dispatch) => {
        // console.log(dispatch)
        fetch('http://127.0.0.1:3000/teams')
        .then(res => res.json())
        .then(teams => dispatch({type: 'FETCH_TEAMS', teams: teams}))
    })
}

