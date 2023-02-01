import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import personalReducer from '../reducers/personalReducer';
import professionalReducer from '../reducers/professionalReducer';

const rootReducer = combineReducers({ professionalReducer, personalReducer });

const store = createStore(rootReducer, composeWithDevTools());

export default store;
