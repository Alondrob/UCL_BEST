import React, { useState } from 'react'
import './Player.css'

export default function PlayerDetail({ player }) {
    // console.log(player)
    const playerState = [player.name, player.position, player.nationality, player.age]

    console.log('player-console',player)

    // const playerInfo = player.map((player) => 
    // <div>
    //     <h3>Position: {player.position}</h3>
    //     <h3>Age: {player.age}</h3>
    //     <h3>Nationality: {player.nationality}</h3>
    // </div>
    // )

    return (
        <div >
            {/* {playerState.map(item => {
                return <h3> {item} </h3>
            })} */}
            
            <h3 className='player-info'>Position: {player.position}</h3>
            <h3 className='player-info'>Age: {player.age} </h3>
            <h3 className='player-info'>Nationality: {player.nationality}</h3>
        </div>
    )
}
