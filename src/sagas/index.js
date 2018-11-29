import { all, fork } from 'redux-saga/effects';
import { 
    watchGetLibraryList,
    watchGetSelectedLibrary 
} from './watcher';

export default function* rootSaga(){
    yield all([
        fork(watchGetLibraryList),
        fork(watchGetSelectedLibrary)
    ]);
};

