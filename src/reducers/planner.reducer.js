import {
    PLANNER_ADD,
    PLANNER_REMOVE
} from '../constants'

const planner = (state = [], action) => {
    switch (action.type) {
        case PLANNER_ADD:
            return [
                ...state, {
                    id: action.id,
                    expiredDate: action.expiredDate,
                    createdDate: action.createdDate,
                    text: action.text,
                }
            ]
        case PLANNER_REMOVE:
            const elementsWithoutElementToRemove = state.filter(element => element.id != action.id);
            return [
                ...elementsWithoutElementToRemove
            ]
        default:
            return state;
    }
}

export default planner;