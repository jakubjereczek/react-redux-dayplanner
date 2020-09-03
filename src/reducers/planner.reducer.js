const planner = (state = [], action) => {
    switch (action.type) {
        case "PLANNER_ADD":
            return [
                ...state, {
                    id: action.id,
                    hour: action.hour,
                    time: action.time,
                    text: action.text,
                }
            ]
        case "PLANNER_REMOVE":
            const elementsWithoutElementToRemove = state.filter(element => element.id !== action.id);

            return [
                ...elementsWithoutElementToRemove
            ]
        default:
            return state;
    }
}

export default planner;