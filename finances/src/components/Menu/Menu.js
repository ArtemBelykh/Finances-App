import React from 'react';
import './menu.module.css'
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><NavLink to="/">Счета</NavLink></li>
                    <li><NavLink to="/records">Записи</NavLink></li>
                    <li><NavLink to="/purposes">Цели</NavLink></li>
                    <li><NavLink to="/budget">Бюджет</NavLink></li>
                </ul>
            </nav>
        </>
    );
};

export default Menu;