import { Platform } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import * as asyncInitialState from 'redux-async-initial-state';

import RootReducer from './Reducers';
import { combineReducers } from 'redux';

const middleware = applyMiddleware(thunk, promise, logger);

let composeEnhancers = composeWithDevTools({
    realtime: true,
    name: Platform.OS,
    host: 'localhost',
    port: 5678,
});

const reducer = asyncInitialState.outerReducer(RootReducer);

const loadStore = currentState => {
    return new Promise((resolve, reject) => {
        resolve( Object.assign({}, currentState, {}));
    });
};

if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
        const nextRootReducer = combineReducers(require('./Reducers'));
        Store.replaceReducer(nextRootReducer);
    });
}

const Store = createStore(
    reducer,
    composeEnhancers(middleware),
    compose(applyMiddleware(asyncInitialState.middleware(loadStore)))
);

export default Store;
