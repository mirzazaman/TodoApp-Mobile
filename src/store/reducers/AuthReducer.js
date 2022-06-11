import { LOGIN, LOGOUT } from "../../constants/Types";

let initialState = {
    isUserLogin: false,
    user: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isUserLogin: true,
                user: action.payload
            };
        case LOGOUT:
            return {
                ...state,
                isUserLogin: false,
                user: null
            };

        default:
            return state;
    }
}