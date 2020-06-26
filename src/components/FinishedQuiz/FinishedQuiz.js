import React from 'react';
import s from "./FinishedQuiz.module.css"
import Button from "../UI/Button/Button";
import {Link} from "react-router-dom";

function FinishedQuiz(props) {

    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success'){
            total++
        }
        return total
    }, 0)

    return (
        <div className={s.FinishedQuiz}>
            <ul>
                { props.quiz.map((quizItem, index) => {
                    const cls = [
                        ' fa ',
                        props.results[quizItem.id] === 'error' ? ' fa-times ' : ' fa-check ',
                        s[props.results[quizItem.id]]
                    ]

                    return(
                        <li key={index}>
                            <strong>{index + 1}</strong>. &nbsp;
                            {quizItem.question}
                            <i className={cls.join(' ')} />
                        </li>
                    )
                }) }
            </ul>

            <p>Your result: {successCount} from {props.quiz.length}</p>

            <div>
                <Button onClick={props.onRetry} type={'primary'}>Repeat</Button>
                <Link to={'/'}>
                    <Button onClick={''} type={'success'}>Go to tests list</Button>
                </Link>
            </div>
        </div>
    )
};

export default FinishedQuiz;