import React from 'react';
import s from "./Backdrop.module.css"

function Backdrop (props) {
    return (
        <div
        className={s.Backdrop}
        onClick={props.onClick}
        />
    )
};

export default Backdrop;