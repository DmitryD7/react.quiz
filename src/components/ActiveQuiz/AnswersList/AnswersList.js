import React from 'react';
import s from "./AnswersList.module.css"
import AnswerItem from "./AnswerItem/AnswerItem";

function AnswersList(props) {

    return (
        <ul className={s.AnswersList}>
            {props.answers.map((answer, index) => {
                return (
                    <AnswerItem
                        key={index}
                        answer={answer}
                        onAnswerClick={props.onAnswerClick}
                        state={props.state ? props.state[answer.id] : null}
                    />
                )
            })}
        </ul>

    )
};

export default AnswersList;