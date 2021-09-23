
import React, { useEffect, useState } from 'react';
import TeamList from './TeamList';

export default function Teams() {
    const teamsUrl = 'http://127.0.0.1:3000/teams'
    const [teams, setTeams] = useState([])
    useEffect(() => {

        fetch(teamsUrl,
            {
                method: 'get',
                mode: 'cors',
                headers: {
                    
                    'accept': 'application/json'
                }
            }
        )
            .then(res => res.json())
            //  .then(data => console.log(data))
            .then(data => setTeams(data))
    }, [])
    return (
        <div className="App">
            {/* <PlayerSelection /> */}
            <TeamList teams={teams} />
        </div>
    );
}
