import {
    GET_LIBRARY_LIST_REQUEST,
    GET_LIBRARY_LIST_SUCCESS,
    GET_LIBRARY_LIST_FAILURE,
    GET_LIBRARY_SELECTED_REQUEST,
    GET_LIBRARY_SELECTED_SUCCESS,
    GET_LIBRARY_SELECTED_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    selectedLibrary: null,
    errorMessage: '',
    loading: false
};

export default function(state=INITIAL_STATE, action){
    switch(action.type){
        case GET_LIBRARY_LIST_REQUEST:
            return { ...state, loading: true }
        case GET_LIBRARY_LIST_SUCCESS:
            return { ...state, data: [...action.payload], loading: false };
        case GET_LIBRARY_LIST_FAILURE:
            return { ...state, errorMessage: action.payload, loading: false };
        case GET_LIBRARY_SELECTED_REQUEST:
            return { ...state, loading: true}
        case GET_LIBRARY_SELECTED_SUCCESS:
            return { ...state, selectedLibrary: action.payload, loading: false}
        case GET_LIBRARY_SELECTED_FAILURE:
            return { ...state, errorMessage: action.payload, loading: false }
       default:
        return state;
    }
}