import { useContext, useEffect, useState } from "react";

import { QuizContext } from "../../contexts/QuizContext";
import Option from "../Option/Option";

import "./index.css";

const Question = () => {
    const [quizState, dispatch] = useContext(QuizContext);
    const currentQuestion = quizState.questions[quizState.currentQuestion];
    const [erros] = useState([]);

    const onSelectOption = (option) => {
        dispatch({
            type: "CHECK_ANSWER",
            payload: { answer: currentQuestion.answer, option, assunto: currentQuestion.assunto },
        });
    };

    console.log(quizState.optionToHide);

    return (
            <div id="question" className="question">
                <p className="pergunta">
                    Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}
                </p>
                <h3 className="pergunta q">{currentQuestion.question}</h3>
                <div id="options-container">
                    {currentQuestion.options.map((option) => (
                    <Option
                        option={option}
                        key={option}
                        answer={currentQuestion.answer}
                        selectOption={() => onSelectOption(option)}
                        hide={quizState.optionToHide === option ? "hide" : null}
                    />
                    ))}
                </div>
                {!quizState.answerSelected && !quizState.help && (
                    <>
                        {currentQuestion.tip && (
                            <button onClick={() => dispatch({ type: "SHOW_TIP" })}>Dica</button>
                        )}
                    </>
                )}
                {!quizState.answerSelected && quizState.help === "tip" && (
                    <p>{currentQuestion.tip}</p>
                )}
                {quizState.answerSelected && (
                    <button className="btn-dgd" id="proxima-questao" onClick={() => dispatch({ type: "CHANGE_QUESTION" })}>
                    Continuar
                    </button>
                )}
            </div>

    );
};

export default Question;
