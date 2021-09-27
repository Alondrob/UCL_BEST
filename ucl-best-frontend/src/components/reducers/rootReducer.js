import {combineReducers} from 'redux'
import teamReducer from './teamReducer'
import fantasyTeamReducer from './fantasyTeamReducer'

const rootReducer = combineReducers({
    teamReducer: teamReducer,
    fantasyTeamReducer: fantasyTeamReducer
})

export default rootReducer
