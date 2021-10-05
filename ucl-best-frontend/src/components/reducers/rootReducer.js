import {combineReducers} from 'redux'
import teamReducer from './teamReducer'
import fantasyTeamReducer from './fantasyTeamReducer'
import playersReducer  from './playersReducer'

const rootReducer = combineReducers({
    teamReducer: teamReducer,
    fantasyTeamReducer: fantasyTeamReducer,
    playersReducer: playersReducer
})

export default rootReducer
