import React, { useCallback, useState } from 'react';
import PlayerList from './PlayerList';
import './Player.css'

const PlayerSelection = () => {
    const [isPlayerListVisible, setIsPlayerListVisible] = useState(false);

    const onClick = useCallback(() => {
        console.log('clocked');
        setIsPlayerListVisible((state) => !state);
    }
        , [setIsPlayerListVisible]);


    return (
        <div >
            <div>
                <button id="player-selection" onClick={onClick}>
                    Open Players List
                </button>
                {isPlayerListVisible && <PlayerList />}
            </div>
        </div>
    )
}

export default PlayerSelection;

