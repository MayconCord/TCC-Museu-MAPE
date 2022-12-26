import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import "./index.css";
import Quiz from "../../assets/welcome.svg";

const Welcome = () => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div id="welcome" className="welcome">
            <h2>Seja bem-vindo</h2>
            <p className="text-quiz">Clique no botão abaixo para começar:</p>
            <button id="inicia-quiz2" className="btn-dgd-quiz" onClick={() => dispatch({ type: "CHANGE_STAGE"})}>
                Iniciar
            </button>
            <img src={Quiz} alt="Início do quiz" />
        </div>
    );
};

export default Welcome;