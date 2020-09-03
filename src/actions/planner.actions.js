let id = 0;

export const addElement = (hour, text, time) => ({
    type: "PLANNER_ADD",
    id: id++,
    hour,
    time,
    text
})

export const removeElement = (id) => ({
    type: "PLANNER_REMOVE",
    id
})
