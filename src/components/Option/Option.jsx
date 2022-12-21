import { useContext } from "react";
import { QuizContext } from "../../contexts/QuizContext";
import "./index.css";

const Option = ({ option, selectOption, answer, hide }) => {
    const [quizState, dispatch] = useContext(QuizContext);

    return (
        <div
        onClick={() => selectOption()}
        className={`
        option
            ${quizState.answerSelected && option === answer ? "correct" : ""} ${
            quizState.answerSelected && option !== answer ? "wrong" : ""
        }
            ${hide ? "hide" : ""}
            `}
        >
        <p className="text-quiz">{option}</p>
        </div>
    );
};

export default Option;