import React from 'react';
import s from './QuizList.module.css'
import {NavLink} from "react-router-dom";

function QuizList(props) {

    function renderQuizes() {
        return [1, 2, 3].map((quiz, index)=>{
            return (
                <li
                key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                        Test {quiz}
                    </NavLink>
                </li>
            )
        })
    }

    return (
        <div className={s.QuizList}>
            <div>
                <h1>Tests list</h1>

                <ul>
                    {renderQuizes()}
                </ul>
            </div>
        </div>
    )
};

export default QuizList;