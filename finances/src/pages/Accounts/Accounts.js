import React, {useEffect, useState} from 'react';
import style from './accounts.module.css'
import Modal from "../../components/Modal/Modal";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createScore, getScores} from "../../redux/action";
import {Link} from "react-router-dom";

const Accounts = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm()

    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()

    const score = useSelector(state => {
        const {scoresReducer} = state

        return scoresReducer
    })

    function onSubmit(data) {
        dispatch(createScore(data))
        reset()
    }
    useEffect(() => {
        dispatch(getScores())
    }, [])


    return (
        <div className={style.accounts__container}>
            <h1>Счета</h1>


            <label>Список счетов</label>
            <button onClick={() => setModalActive(true)}>Создать счёт</button>

            {score.scores?.map((data,index) => (


                <div key={index} className={style.accounts__card} style={{background: data.color}}>
                    <Link to={'scores/' + data.id}>{data.nameScores}</Link>
                    <p>{data.sum} {data.currency}</p>
                </div>
            ))}


            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label style={{color: "black"}}>
                        <p>Имя счёта:</p>
                        <input {...register('nameScores', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Сумма счёта:</p>
                        <input type="number" {...register('sum', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Номер счёта:</p>
                        <input type="number" {...register('numberScore', {required: true})} />
                    </label>

                    <select {...register('currency', {required: true})} style={{color: "black"}}>
                        <p>Сумма счёта:</p>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>

                    <label style={{color: "black"}}>
                        <p>Цвет счёта:</p>
                        <input type="color" {...register('color', {required: true})} />
                    </label>

                    <div><input type="submit"/></div>
                </form>
            </Modal>
        </div>
    );
};

export default Accounts;