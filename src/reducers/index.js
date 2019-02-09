import {combineReducers} from 'redux';

import goals from './reducerGoals';
import user from './reducerUser';
import completeGoals from './completeGoals';

export default combineReducers( { goals, user, completeGoals } )