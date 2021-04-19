import {createStore, combineReducers} from 'redux';
import {devToolsEnhancer} from 'redux-devtools-extension'
import userReducer from './userReducer';

const rootReducer = combineReducers ({
  userReducer
})

export default createStore(rootReducer, devToolsEnhancer())