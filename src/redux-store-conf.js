

import {createStore,combineReducers,applyMiddleware,compose} from "redux";

import logger from "redux-logger";

import {appReducer} from './components/App/App.reducer';
import {playerReducer} from './components/Player/Player.reducer';
import {wordInputReducer} from './components/WordInput/WordInput.reducer';

const bigReducer = combineReducers ({appReducer, playerReducer, wordInputReducer});





/*
const logger = (store) => (next) => (action) => {
    console.log ('Logged Action: ' + action);
    next(action);
};
*/

const appStore = createStore( bigReducer, {}, applyMiddleware (logger)  );

export default appStore;