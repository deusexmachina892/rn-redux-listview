import { 
    GET_LIBRARY_LIST_REQUEST,
    GET_LIBRARY_LIST_SUCCESS
} from './types';

export const getLibraryList = function(){
    return { type: GET_LIBRARY_LIST_REQUEST };
};
