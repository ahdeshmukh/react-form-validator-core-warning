import { CLEAR_STATE } from "../constants/action-types";
//import initialState from "./initial-state"

export const clearStateReducer = (state = null, action) => {
    switch(action.type) {
        case CLEAR_STATE:
            //return Object.assign({}, state, {tasks: state.tasks.concat({"id":1, "title":"Test"})});
            return state;
        default:
            return state;
    }
}
