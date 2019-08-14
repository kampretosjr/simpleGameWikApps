import {combineReducers} from 'redux';

import reLeaderboard from './leaderboard';
import rePlayer from './player';

const appReducer = combineReducers({
  reLeaderboard,
  rePlayer,
});

export default appReducer;
