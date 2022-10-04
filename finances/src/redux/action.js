import {
    CREATE_BUDGET,
    CREATE_PURPOSES,
    CREATE_RECORDS,
    CREATE_SCORES,
    DELETE_SCORES, GET_BUDGET,
    GET_ONE_SCORES,
    GET_PURPOSES,
    GET_RECORDS,
    GET_SCORES
} from "./types";
import axios from "axios";

export function getScores() {
    return async dispatch => {
        const jsonData = await axios.get('http://localhost:7000/api/scores')
        //console.log(jsonData)
        dispatch({
            type: GET_SCORES,
            jsonData
        })
    }
}

export function getOneScores(id) {
    return async dispatch => {
        const jsonData = await axios.get('http://localhost:7000/api/scores/' + id)
        console.log(jsonData)
        dispatch({
            type: GET_ONE_SCORES,
            jsonData
        })
    }
}

export function DeleteScores(id) {
    return async dispatch => {
        const jsonData = await axios.delete('http://localhost:7000/api/scores/' + id)
        console.log(jsonData)
        dispatch({
            type: DELETE_SCORES,
            id
        })
    }
}

export function createScore(data) {
    //console.log(data)
    return async dispatch => {
        const response = await axios.post('http://localhost:7000/api/scores', {
            color: data.color,
            currency: data.currency,
            nameScores: data.nameScores,
            numberScore: data.numberScore,
            sum: data.sum
        })
        dispatch({
            type: CREATE_SCORES,
            data
        })
    }
}

// records

export function getRecords() {
    return async dispatch => {
        const response = await axios.get('http://localhost:7000/api/records')

        dispatch({
            type: GET_RECORDS,
            response
        })
    }
}

export function createRecords(data) {
    //console.log(data)
    return async dispatch => {
        const response = await axios.post('http://localhost:7000/api/records', {
            uid: data.uid,
            category: data.category,
            scores: data.scores,
            sum: data.sum,
            currency: data.currency,
            type: data.type,
            date: data.date,
        })
        dispatch({
            type: CREATE_RECORDS,
            response
        })
    }
}

//purposes

export function getPurposes() {
    return async dispatch => {
        const response = await axios.get('http://localhost:7000/api/purposes')

        dispatch({
            type: GET_PURPOSES,
            response
        })
    }
}

export function createPurposes(data) {
    //console.log(data)
    return async dispatch => {
        const response = await axios.post('http://localhost:7000/api/purposes', {
            name: data.name,
            targetAmount: data.targetAmount,
            alreadyAccumulated: data.alreadyAccumulated,
            date: data.date,
            color: data.color,
            currency: data.currency
        })
        dispatch({
            type: CREATE_PURPOSES,
            response
        })
    }
}

//budget

export function getBudget() {
    return async dispatch => {
        const response = await axios.get('http://localhost:7000/api/budget')

        dispatch({
            type: GET_BUDGET,
            response
        })
    }
}

export function createBudget(data) {
    //console.log(data)
    return async dispatch => {
        const response = await axios.post('http://localhost:7000/api/budget', {
            name: data.name,
            sum: data.sum,
            currency: data.currency,
            category: data.category,
            scores: data.scores,
        })
        dispatch({
            type: CREATE_BUDGET,
            response
        })
    }
}