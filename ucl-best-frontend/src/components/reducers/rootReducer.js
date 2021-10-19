import {combineReducers} from 'redux'
import teamReducer from './teamReducer'
import fantasyTeamReducer from './fantasyTeamReducer'
import playersReducer  from './playersReducer'
import userReducer from './userReducer';

const rootReducer = combineReducers({
    teamReducer: teamReducer,
    fantasyTeamReducer: fantasyTeamReducer,
    playersReducer: playersReducer,
    userReducer: userReducer
})

export default rootReducer
