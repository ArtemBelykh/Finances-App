import {CREATE_RECORDS, GET_RECORDS} from "../types";

const initialState = {
    records: []
}

export const recordsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RECORDS:
            return {
                ...state,
                records: action.response.data
            }
        case CREATE_RECORDS:
            return {
                ...state,
                records: [...state.records, action.response]
            }
        default:
            return state
    }
}