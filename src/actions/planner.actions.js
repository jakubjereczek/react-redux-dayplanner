let id = 0;

export const addElement = (hour, text) => ({
    type: "PLANNER_ADD",
    id: id++,
    hour,
    text
})

export const removeElement = (id) => ({
    type: "PLANNER_REMOVE",
    id
})