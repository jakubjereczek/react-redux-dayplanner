import { combineReducers } from 'redux';
import plannerReducer from "./planner.reducer";

export default combineReducers({
    planner: plannerReducer
});
