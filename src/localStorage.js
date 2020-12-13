export const load = async () => {
    return Promise.resolve().then(() => {
        const state = localStorage.getItem('state');
        if (state !== null) {
            return JSON.parse(state);
        }
        return 0;
    });

};

export const save = async (state) => {
    return Promise.resolve().then(() => {
        let statestring = JSON.stringify(state);
        localStorage.setItem('state', statestring);
    });
}
