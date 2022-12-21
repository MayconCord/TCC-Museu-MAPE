import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import WellDone from "../../assets/img/welldone.svg";
import Recomendacao from "../../pages/Recomendacao/Recomendacao";
import "./index.css";

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const erros = quizState.assuntosErrados.split(',');
    const errosFiltrados = erros.filter(function (i) {
        return i;
    });

    useEffect(()=>{
        setErros(quizState.assuntosErrados)
    }, []);

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length}{" "}
                perguntas.</p>
            <p>Você errou questões do seguintes assuntos: {errosFiltrados}</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <button className="btn-dgd" onClick={() => dispatch({ type: "NEW_GAME" })}>Reiniciar</button>
            <div className="mt-4">
                <Recomendacao busca={errosFiltrados} />
            </div>
        </div>
    );
};

export default GameOver;