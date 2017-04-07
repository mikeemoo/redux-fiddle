import { ADD_NOTE, SET_NOTES } from "../../../shared/constants";
import { addOrReplace } from "../models/notes";

export default (state = [], action) => {

	switch (action.type) {

		case ADD_NOTE:
			return addOrReplace(state, action.note);

		case SET_NOTES:
			return action.notes;

	}
	return state;
};
