import React, { useCallback, useState } from 'react';
import PlayerList from './PlayerList';

const PlayerSelection = () => {
    const [isPlayerListVisible, setIsPlayerListVisible] = useState(false);

    const onClick = useCallback(() => {
        console.log('clocked');
        setIsPlayerListVisible((state) => !state);
    }
        , [setIsPlayerListVisible]);


    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
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

