import { combineReducers } from 'redux';
import todo from '../components/pages/Todo/reducer';
import login from '../components/layouts/Login/reducer';
import server from './serverReducer';

const rootReducer = combineReducers({
  login,
  server,
  todo,
});

export default rootReducer;
