export const addElement = (id, expiredDate, text, createdDate) => ({
    type: "PLANNER_ADD",
    id,
    expiredDate,
    createdDate,
    text
})

export const removeElement = (id) => ({
    type: "PLANNER_REMOVE",
    id
})
