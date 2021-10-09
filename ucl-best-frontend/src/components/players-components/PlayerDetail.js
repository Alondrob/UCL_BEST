import React, { useState } from 'react'

export default function PlayerDetail({ player }) {
    // console.log(player)
    const playerState = [player.name, player.position, player.nationality, player.age]


    // setPlayerData(console.log('change'))
    //  console.log(player)
    //  const playerData = player.map(data => data.nationality)

    // setPlayerData(playerData)
    // const playerArray = Object.values(player).map(playerItem => playerItem)
    // playerObject = {nationality: player.nationality}
    // setPlayerState(playerArray)
    // setPlayerState(playerObject)



    return (
        <div className='player-detail'>
            {playerState.map(item => {
                return <h3> {item} </h3>
            })}
        </div>
    )
}
