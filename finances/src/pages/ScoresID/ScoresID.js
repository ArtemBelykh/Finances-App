import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {DeleteScores, getOneScores} from "../../redux/action";

const ScoresId = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const getScores = useSelector(state => {
        const {scoresReducer} = state

        return scoresReducer
    })

    useEffect(() => {

        //console.log(id)
        dispatch(getOneScores(id))
    }, [])

    function onScoresDelete() {
        if (dispatch(DeleteScores(id))) {
            return navigate('/')
        }
    }


    return (
        <div>
            {getScores && getScores.scores.map((data, index) => (
                <div key={index}>
                    <p>{data.nameScores}</p>


                    <button onClick={onScoresDelete}>Delete</button>
                </div>
            ))}
        {/*    scores/:id*/}
        </div>
    );
};

export default ScoresId;