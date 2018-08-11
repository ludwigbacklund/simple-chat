import { combineReducers } from 'redux';

import chat from './chat/reducers';
import users from './users/reducers';

export default combineReducers({ chat, users });
