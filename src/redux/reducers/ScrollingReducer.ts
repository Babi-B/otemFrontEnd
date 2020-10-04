import * as actionTypes from '../actionTypes/actionTypes'

const initState = {
    srolling: false
}

const ScrollingReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.SCROLLING:
            return{
                ...state,
                scrolling: action.payload
            }
        default:
            return state
    }
}

export default ScrollingReducer