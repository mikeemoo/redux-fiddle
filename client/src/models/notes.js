import _ from "lodash";

export const addOrReplace = (notes, note) => {
    let updated = false;
    const newState = _.map(notes, n => {
        if (note.id && n.id === note.id) {
            updated = true;
            return _.assign({}, n, note);
        }
        return n;
    });
    if (!updated) {
        newState.push(note);
    }
    return newState;
};
