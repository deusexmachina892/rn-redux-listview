import { 
    takeLatest
} from 'redux-saga/effects';
import { 
    GET_LIBRARY_LIST_REQUEST,
    GET_LIBRARY_SELECTED_REQUEST
} from '../actions/types';
import { 
    libraryListSaga,
    selectedLibrarySaga
 } from './libraryListSaga';

export function* watchGetLibraryList(){
    yield takeLatest(GET_LIBRARY_LIST_REQUEST, libraryListSaga);
}

export function* watchGetSelectedLibrary(){
    yield takeLatest(GET_LIBRARY_SELECTED_REQUEST, selectedLibrarySaga);
}