import {CREATE_BUDGET, GET_BUDGET} from "../types";

const initialState = {
    budget: []
}

export const budgetReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_BUDGET:
            return {
                ...state,
                budget: action.response.data
            }
        case CREATE_BUDGET:
            return {
                ...state,
                budget: [...state.budget, action.response]
            }
        default:
            return state
    }
}