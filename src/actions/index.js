import { 
    GET_LIBRARY_LIST_REQUEST,
    GET_LIBRARY_SELECTED_REQUEST
} from './types';

export const getLibraryList = function(){
    return { type: GET_LIBRARY_LIST_REQUEST };
};

export const selectLibrary = function(id){
    return { type: GET_LIBRARY_SELECTED_REQUEST, payload: id };
};

