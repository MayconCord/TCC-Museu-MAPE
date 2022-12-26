import { useContext, useEffect } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import { AuthContext } from '../../contexts/AuthContext';
import WellDone from "../../assets/congrat.svg";
import "./index.css";

const GameOver = () => {

    const [quizState, dispatch] = useContext(QuizContext);
    const { user, salvaPontuacao, pegaTentativa } = useContext(AuthContext);
    const erros = quizState.assuntosErrados;

    useEffect(()=>{
        pegaTentativa();
        salvaPontuacao(quizState.score);
    }, [quizState]);

    return (
        <div id="gameover">
            <h2>Fim de jogo!</h2>
            <p className="texto-escuro">Pontuação: <b>{quizState.score}</b></p>
            <p className="texto-escuro">Você acertou <b>{quizState.score}</b> de <b>{quizState.questions.length}</b>{" "}
                perguntas.</p>
            <p className="texto-escuro">Para visualizar as recomendações, basta clicar no botão abaixo.</p>
            <img src={WellDone} alt="Fim do Quiz" />
            <div className="text-center">
            <button className="btn-dgd" onClick={() => dispatch({ type: "SHOW_RECOMENDATION" })}>Recomendações</button>
            </div>
        </div>
    );
};

export default GameOver;