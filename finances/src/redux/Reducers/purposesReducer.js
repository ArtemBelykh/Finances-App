import {CREATE_PURPOSES, GET_PURPOSES} from "../types";

const initialState = {
    purposes: []
}

export const purposesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PURPOSES:
            return {
                ...state,
                purposes: action.response.data
            }
        case CREATE_PURPOSES:
            return {
                ...state,
                purposes: [...state.purposes, action.response]
            }
        default:
            return state
    }
}