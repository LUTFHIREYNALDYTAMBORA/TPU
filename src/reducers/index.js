import { combineReducers } from 'redux';
import todo from '../components/pages/Todo/reducer';
import server from './serverReducer';

const rootReducer = combineReducers({ server, todo });

export default rootReducer;
