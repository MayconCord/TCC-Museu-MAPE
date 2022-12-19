import React from 'react';
import { Button } from 'react-bootstrap';
import quizImg from '../../assets/img_quiz.png';
import { Link } from 'react-router-dom';

function IntroQuiz() {
    return(
        <div className="text-center p-5">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <img src={quizImg} className="img-fluid" />
                </div>
                <div className="col-sm-4">
                    <h1 className="m-3 align-text-bottom">Vamos testar os conhecimentos?</h1>
                    <Link to="/quiz"><Button variant="primary">Iniciar Quiz</Button></Link> 
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default IntroQuiz;