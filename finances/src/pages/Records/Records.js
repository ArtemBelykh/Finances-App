import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import Modal from "../../components/Modal/Modal";
import {useDispatch, useSelector} from "react-redux";
// import style from "../Accounts/accounts.module.css";
import {Link} from "react-router-dom";
import {createRecords, getRecords} from "../../redux/action";

const Records = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm()

    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()
    const records = useSelector(state => {
        const {recordsReducer} = state
        return recordsReducer
    })


    useEffect(() => {
        dispatch(getRecords())
    }, [])

    function onSubmit(data) {
        console.log(data)
        dispatch(createRecords(data))
        reset()
    }

    //console.log(records)

    return (
        <div>
            <h1>Записи</h1>

            <label>Список записей</label>
            <button onClick={() => setModalActive(true)}>Создать запись</button>


            {records.records?.map((data, index) => (
                <div key={index} className="e43">
                    <Link to={'records/' + data.id}>{data.sum}</Link>
                </div>
            ))}


            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <input type="hidden" {...register('uid', {required: true})} value={Math.random()} />
                    <p style={({padding: '20px'})}>
                        <input {...register('type', {required: true})} id='doxod' name='type' type="radio" value='1' />
                        <label htmlFor="doxod">Доход</label>
                        <input {...register('type', {required: true})} id='rashod' name='type' type="radio" value='2' checked />
                        <label htmlFor="rashod">Расход</label>
                        <input {...register('type', {required: true})} id='perevod' name='type' type="radio" value='3' />
                        <label htmlFor="perevod">Перевод</label>
                    </p>

                    <label style={{color: "black"}}>
                        <p>Категория:</p>
                        <input {...register('category', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Счёт:</p>
                        <input type="number" {...register('scores', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Сумма:</p>
                        <input type="number" {...register('sum', {required: true})} />
                    </label>

                    <select {...register('currency', {required: true})} style={{color: "black"}}>
                        <p>Валюта:</p>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>

                    <label style={{color: "black"}}>
                        <p>Дата:</p>
                        <input type="date" {...register('date', {required: true})} />
                    </label>

                    <div><input type="submit"/></div>
                </form>
            </Modal>
        </div>
    );
};

export default Records;