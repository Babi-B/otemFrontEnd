import * as actionTypes from '../actionTypes/actionTypes'

const changeLanguage = (lang) =>{
    return {
        type: actionTypes.CHANGE_LANGUAGE,
        payload: lang
    }
}
export default changeLanguage