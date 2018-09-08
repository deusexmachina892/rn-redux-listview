import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import rootSaga from './sagas';
import { Header } from './components/commons'
import LibraryList from './components/LibraryList';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = composeWithDevTools({});
const store = createStore(
                    reducers,
                    {},
                    composeEnhancers(
                        applyMiddleware(
                            sagaMiddleware
                    )));
sagaMiddleware.run(rootSaga);

const App = () => {
    return (
            <Provider store={store}>
                <View>
                    <Header headerText="Tech Stack"/>
                    <LibraryList />
                </View>
            </Provider>
        );
};

export default App;