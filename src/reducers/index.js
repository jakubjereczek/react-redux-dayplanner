import { combineReducers } from 'redux';
import plannerReducer from "./planner.reducer";
import accountReducer from "./planner.reducer";

export default combineReducers({
    planner: plannerReducer,
    account: accountReducer
});
