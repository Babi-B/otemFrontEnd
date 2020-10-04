import { combineReducers } from 'redux'

import LanguageReducer from './LanguageReducer';
import ScrollingReducer from './ScrollingReducer';

const rootReducer = combineReducers({
    LanguageReducer,
    ScrollingReducer
})

export default rootReducer