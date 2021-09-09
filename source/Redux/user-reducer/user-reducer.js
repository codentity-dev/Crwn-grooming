const intState = {
    currentUser : null
}

const userReducer = (state = intState,action) => {
    if(action.type == 'SET_CURRENT_USER' ) {
        return {
            ...state,
            currentUser:action.payload
        }
    }else{
        return state
    }
}

export default userReducer