import React, {useEffect, useState} from 'react';

import {useForm} from "react-hook-form";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
import {createPurposes, getPurposes} from "../../redux/action";

const Purposes = () => {

    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm()

    const [modalActive, setModalActive] = useState(false)

    const dispatch = useDispatch()

    const purposes = useSelector(state => {
        const {purposesReducer} = state

        return purposesReducer
    })

    useEffect(() => {
        dispatch(getPurposes())
    }, [])


    function onSubmit(data) {
        dispatch(createPurposes(data))
        reset()
    }

    return (
        <div className="purposes__container">
            <h1>Цели</h1>


            <label>Список целей</label>
            <button onClick={() => setModalActive(true)}>Создать цель</button>

            {purposes.purposes?.map((data, index) => (
                <div key={index} className="purposes__card" style={{background: data.color}}>
                    <label>{data.name}</label>
                    <p>Накоплено {data.targetAmount} из {data.alreadyAccumulated} {data.currencyPurposes}</p>
                </div>
            ))}


            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label style={{color: "black"}}>
                        <p>Имя цели:</p>
                        <input {...register('name', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Целевая сумма:</p>
                        <input type="number" {...register('targetAmount', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Уже накоплено:</p>
                        <input type="number" {...register('alreadyAccumulated', {required: true})} />
                    </label>

                    <select {...register('currency', {required: true})} style={{color: "black"}}>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>

                    <label style={{color: "black"}}>
                        <p>Дата:</p>
                        <input type="text" {...register('date', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Цвет цели:</p>
                        <input type="color" {...register('color', {required: true})} />
                    </label>

                    <div><input type="submit"/></div>
                </form>
            </Modal>
        </div>
    );
};

export default Purposes;