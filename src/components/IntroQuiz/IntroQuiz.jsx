import React from 'react';
import { Button } from 'react-bootstrap';
import quizImg from '../../assets/img_quiz.png';
import { Link } from 'react-router-dom';
import './index.css';

function IntroQuiz() {
    return(
        <div className="text-center p-5">
            <div class="">
                <div className="p-2">
                    <img src={quizImg} className="img-fluid img-intro-quiz" />
                </div>
                <div className="d-flex justify-content-center align-items-center p-2">
                    <div className="text-intro-quiz">
                        <h2 className="m-3 align-text-bottom">Vamos testar os conhecimentos?</h2>
                        <p className='text-card sub'>Faça login no site e aproveite!</p>
                        <Link to="/quiz"><Button id="iniciar-quiz" className="btn-intro-quiz">Iniciar Quiz</Button></Link> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroQuiz;