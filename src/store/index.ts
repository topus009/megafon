import {createStore, applyMiddleware, Store, compose} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

import * as types from '../types';

export default function configureStore(
    initialState: types.AppState
): Store<types.AppState> {
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(
                thunk,
                createLogger()
            ))
        );
    return store;
}
