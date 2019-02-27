import { ADD_SESSION_USER, REMOVE_SESSION_USER } from "../constants/action-types";

export function addSessionUser(user) {
    return { type: ADD_SESSION_USER, user };
};

export function removeSessionUser() {
    return { type: REMOVE_SESSION_USER };
};