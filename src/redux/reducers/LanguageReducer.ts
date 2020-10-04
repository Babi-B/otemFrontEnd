import i18n from 'i18n-js';
import en from '../../translation/en';
import fr from '../../translation/fr';
import * as actionTypes from '../actionTypes/actionTypes'

const initState = {
    i18n: i18n
}

const LanguageReducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LANGUAGE:

            const locale = action.payload
            localStorage.setItem("locale", locale); //save it in browser storage
            i18n.locale = locale // update i18n's locale to the payload passed
            i18n.fallbacks = true
            i18n.translations = { en, fr }
            let newI18n = {...i18n}
            return {
                ...state,
                i18n: newI18n
            }

        default:
            return state;
    }
}

export default LanguageReducer