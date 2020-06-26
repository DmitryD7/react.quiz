import React from 'react';
import s from "./Drawer.module.css"
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const links = [
    {to: '/', label: 'List', exact: true},
    {to: '/auth', label: 'Authorisation', exact: false},
    {to: '/quiz-creator', label: 'Create test', exact: false}
]

function Drawer(props) {

   const clickHandler = () => {
        props.onClose()
    };

    function renderLinks() {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={s.active}
                    onClick={clickHandler}
                    >{link.label}
                    </NavLink>
                </li>
            )
        })
    }

    const cls = [s.Drawer]

    if (!props.isOpen) {
        cls.push(s.close)
    }

    return (
        <>
            <nav className={cls.join(' ')}>
                <ul>
                    {renderLinks()}
                </ul>
            </nav>
            {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
        </>
    )
};

export default Drawer;