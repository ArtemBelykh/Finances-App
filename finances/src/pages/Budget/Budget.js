import React, {useEffect, useState} from 'react';
import style from "../Accounts/accounts.module.css";
import {Link} from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createBudget, getBudget} from "../../redux/action";

const Budget = () => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm()

    const [modalActive, setModalActive] = useState(false)
    const dispatch = useDispatch()

    const budget = useSelector(state => {
        const {budgetReducer} = state

        return budgetReducer
    })


    useEffect(() => {
        dispatch(getBudget())
    })

    function onSubmit(data) {
        dispatch(createBudget(data))
    }

    return (
        <div>
            <h1>budget</h1>

            <label>Список бюджетов</label>
            <button onClick={() => setModalActive(true)}>Создать бюджет</button>

            {budget.budget?.map((data,index) => (


                <div key={index} className="retwer">
                    <Link to={'scores/' + data.id}>{data.name}</Link>
                    <p>{data.sum} {data.currency}</p>
                </div>
            ))}


            <Modal active={modalActive} setActive={setModalActive}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label style={{color: "black"}}>
                        <p>Имя счёта:</p>
                        <input {...register('name', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Сумма счёта:</p>
                        <input type="number" {...register('sum', {required: true})} />
                    </label>

                    <select {...register('currency', {required: true})} style={{color: "black"}}>
                        <p>Сумма счёта:</p>
                        <option>RUB</option>
                        <option>USD</option>
                        <option>EUR</option>
                    </select>

                    <label style={{color: "black"}}>
                        <p>Номер счёта:</p>
                        <input type="number" {...register('category', {required: true})} />
                    </label>

                    <label style={{color: "black"}}>
                        <p>Номер счёта:</p>
                        <input type="number" {...register('scores', {required: true})} />
                    </label>

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

export default Budget;