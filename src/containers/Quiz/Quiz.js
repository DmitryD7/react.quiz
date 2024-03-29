import React, {useState} from 'react';
import s from "./Quiz.module.css"
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";

function Quiz(props) {

    let [state, setState] = useState({
        results: {},
        isFinished: false,
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                question: 'What the sky color?',
                rightAnswerId: 2,
                id: 1,
                answers: [
                    {text: 'Black', id: 1},
                    {text: 'Blue', id: 2},
                    {text: 'Red', id: 3},
                    {text: 'Green', id: 4},
                ]
            },
            {
                question: 'What year was the Minsk founded in?',
                rightAnswerId: 3,
                id: 2,
                answers: [
                    {text: '1700', id: 1},
                    {text: '1232', id: 2},
                    {text: '1067', id: 3},
                    {text: '1157', id: 4},
                ]
            }
        ]
    })

    const onAnswerClickHandler = (answerId) => {
        if (state.answerState) {
            const key = Object.keys(state.answerState)[0]
            if (state.answerState[key] === 'success') {
                return
            }
        }
        const question = state.quiz[state.activeQuestion]
        const results = state.results

        if (question.rightAnswerId === answerId) {
            if (!results[question.id]) {
                results[question.id] = 'success'
            }

            state.answerState = {[answerId]: 'success'}
            state.results = results
            setState({...state})

            const timeout = window.setTimeout(() => {
                if (isQuizFinished()) {
                    state.isFinished = true;
                    setState({...state})
                } else {
                    state.activeQuestion = state.activeQuestion + 1;
                    state.answerState = null;
                    setState({...state})
                }
                window.clearTimeout(timeout)
            }, 1000)
        } else {
            results[question.id] = 'error'
            state.answerState = {[answerId]: 'error'}
            state.results = results
            setState({...state})
        }
    }

    function isQuizFinished() {
        return state.activeQuestion + 1 === state.quiz.length
    }

    const retryHandler = () => {
        state.activeQuestion = 0;
        state.answerState = null;
        state.isFinished = false;
        state.results = {};
        setState({...state})
    }

    return (
        <div className={s.Quiz}>
            <div className={s.QuizWrapper}>
                <h1>Answer the questions</h1>
                {
                    state.isFinished
                        ? <FinishedQuiz
                            results={state.results}
                            quiz={state.quiz}
                            onRetry={retryHandler}
                        />
                        : <ActiveQuiz
                            answers={state.quiz[state.activeQuestion].answers}
                            question={state.quiz[state.activeQuestion].question}
                            onAnswerClick={onAnswerClickHandler}
                            quizLenth={state.quiz.length}
                            answerNumber={state.activeQuestion + 1}
                            state={state.answerState}
                        />
                }

            </div>
        </div>
    )
};

export default Quiz;