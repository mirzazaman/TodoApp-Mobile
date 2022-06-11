import { ADD_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK } from "../../constants/Types";


let initialState = {
    newState: []
}

export const DBReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                newState: [...state.newState, action.payload]
            };

        case GET_TASK:
            return {
                ...state,
                newState: action.payload
            };

        case DELETE_TASK:
            let filterList = state.newState.filter((item) => item.docID !== action.payload)
            return {
                ...state,
                newState: filterList
            };

        case UPDATE_TASK:
            let updatedList = state.newState.map((doc) => {
                if (doc.docID === action.payload.docID) {
                    return { ...action.payload.task, ...action.payload.docID }

                } else { return doc }
            })
            return {
                ...state,
                newState: updatedList
            }

        default:
            return state;
    }
}