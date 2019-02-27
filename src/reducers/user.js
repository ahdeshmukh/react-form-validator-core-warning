import { ADD_SESSION_USER, REMOVE_SESSION_USER } from "../constants/action-types";
//import initialState from "./initial-state"

const intitialState = {"user": null};

export const userReducer = (state = intitialState, action) => {
    switch(action.type) {
        case ADD_SESSION_USER:
            //return Object.assign({}, state, {user: action.user});
            return {...state, user: action.user};
            //return state;
        case REMOVE_SESSION_USER:
            return intitialState;
        default:
            return state
    }
}
