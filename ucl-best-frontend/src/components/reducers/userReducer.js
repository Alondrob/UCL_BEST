
const userReducer = (state = {user: undefined}, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                user: action.user
            }
        default:
            return state;
    }
}