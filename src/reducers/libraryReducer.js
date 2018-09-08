import {
    GET_LIBRARY_LIST_SUCCESS,
    GET_LIBRARY_LIST_FAILURE
} from '../actions/types';

const INITIAL_STATE = {};

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case GET_LIBRARY_LIST_SUCCESS:
            return {...state, ...action.payload};
        case GET_LIBRARY_LIST_FAILURE:
            return {...state, ...action.payload};
       default:
        return state;
    }
}