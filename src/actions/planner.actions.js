let id = 0;

export const addElement = (expiredDate, text, createdDate) => ({
    type: "PLANNER_ADD",
    id: id++,
    expiredDate,
    createdDate,
    text
})

export const removeElement = (id) => ({
    type: "PLANNER_REMOVE",
    id
})
