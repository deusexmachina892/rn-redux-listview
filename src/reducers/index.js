import  { combineReducers } from 'redux';

import librariesReducer from './libraryReducer';

export default combineReducers({
    libraries: librariesReducer
});
