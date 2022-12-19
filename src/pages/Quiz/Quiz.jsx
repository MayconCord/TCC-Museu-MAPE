import React from 'react';
import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import GameOver from "../../components/GameOver/GameOver";
import "./index.css";

function QuizApp() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(()=>{
        dispatch({ type: "REORDER_QUESTIONS"})
    }, [])

    return (
        <div className="body">
            <div className="App">
                <h1>Quiz Afro PE</h1>
                {quizState.gameStage === "Start" && <Welcome />}
                {quizState.gameStage === "Playing" && <Question />}
                {quizState.gameStage === "End" && <GameOver />}
            </div>
        </div>

    );
}

export default QuizApp;
