import { takeLatest, takeEvery } from 'redux-saga/effects';
import { GET_LIBRARY_LIST_REQUEST } from '../actions/types';
import { libraryListSaga } from './libraryListSaga';

export function* watchGetLibraryList(){
    yield takeLatest(GET_LIBRARY_LIST_REQUEST, libraryListSaga);
}