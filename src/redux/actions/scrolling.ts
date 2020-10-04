import * as actionTypes from '../actionTypes/actionTypes'

const scrolling  = (scrollingState) => {
    return{
        type: actionTypes.SCROLLING,
        payload: scrollingState
    }
}
export default scrolling