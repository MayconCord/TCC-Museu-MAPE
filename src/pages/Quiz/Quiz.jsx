import React from 'react';
import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import Welcome from "../../components/Welcome/Welcome";
import Question from "../../components/Question/Question";
import GameOver from "../../components/GameOver/GameOver";
import Recomendacao from '../Recomendacao/Recomendacao';
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
                <div className="content-quiz">
                {quizState.gameStage === "Start" && <Welcome />}
                {quizState.gameStage === "Playing" && <Question />}
                {quizState.gameStage === "End" && <GameOver />}
                {quizState.gameStage === "Recomendation" && <Recomendacao />}
                </div>
            </div>
        </div>

    );
}

export default QuizApp;
