
import React, { useEffect, useState } from 'react';
import TeamList from './TeamList';

export default function Teams() {
    const teamsUrl = 'https://api.football-data.org/v2/competitions/2001/teams'
    const [teams, setTeams] = useState([])
    useEffect(() => {

        fetch(teamsUrl,
            {
                method: 'get',
                mode: 'cors',
                headers: {
                    'x-auth-token': '79ed90e3adb84566a10136976e3b54ad',
                    'accept': 'application/json'
                }
            }
        )
            .then(res => res.json())
            //  .then(data => console.log(data))
            .then(data => setTeams(data.teams))
    }, [])
    return (
        <div className="App">
            {/* <PlayerSelection /> */}
            <TeamList teams={teams} />
        </div>
    );
}
