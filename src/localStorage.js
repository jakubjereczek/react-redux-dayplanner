export const load = () => {
    const state = localStorage.getItem('state');
    if (state !== null) {
        return JSON.parse(state);
    }
};

export const save = (state) => {
    let statestring = JSON.stringify(state);
    localStorage.setItem('state', statestring);
}
