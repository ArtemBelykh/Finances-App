import {CREATE_SCORES, DELETE_SCORES, GET_ONE_SCORES, GET_SCORES} from "../types";

const initialState = {
 scores: []
}


export const scoresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_SCORES:
            return {
                ...state,
                scores: action.jsonData.data
            }
        case CREATE_SCORES:
            return {
                ...state,
                scores: [...state.scores, action.data]
            }
        case GET_ONE_SCORES:
            return {
                ...state,
                scores: action.jsonData.data
            }
        case DELETE_SCORES:
            return (() => {
                const {id} = action
                const {scores} = state

                const itemIndex = scores.findIndex(res => res.id === id)

                const deleteScores = [
                    ...scores.slice(0, itemIndex),
                    ...scores.slice(itemIndex + 1)
                ]

                return {
                    ...state,
                    scores: deleteScores
                }
            })
        default:
            return state
    }
}