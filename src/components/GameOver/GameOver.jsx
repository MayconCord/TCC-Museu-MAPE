import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import WellDone from "../../assets/img/welldone.svg";
import "./index.css";

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>
                Você acertou {quizState.score} de {quizState.questions.length}{" "}
                perguntas.
            </p>
            <p>Você errou questões do seguintes assuntos: {quizState.assuntosErrados}</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
        </div>
    );
};

export default GameOver;