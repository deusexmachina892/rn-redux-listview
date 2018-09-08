import { all, put, call } from 'redux-saga/effects';
import { 
    GET_LIBRARY_LIST_SUCCESS,
    GET_LIBRARY_LIST_FAILURE
} from '../actions/types';
import { libraryListData } from '../api';

export function* libraryListSaga(){
    try {
        const data = yield call(libraryListData);
        yield put({ type: GET_LIBRARY_LIST_SUCCESS, payload: data })
    } catch(err){
        yield put({ type: GET_LIBRARY_LIST_FAILURE, payload: err.message })
    }
}