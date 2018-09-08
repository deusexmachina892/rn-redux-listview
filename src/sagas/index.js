import { all, fork } from 'redux-saga/effects';
import { 
    watchGetLibraryList 
} from './watcher';

export default function* rootSaga(){
    yield all([
        fork(watchGetLibraryList)
    ]);
};

