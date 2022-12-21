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
                    <div className="text-intro-quiz">
                        <h1 className="m-3 align-text-bottom">Vamos testar os conhecimentos?</h1>
                        <p className='text-card sub'>Faça login no site e aproveite!</p>
                        <Link to="/quiz"><Button className="btn-dgd">Iniciar Quiz</Button></Link> 
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>
    )
}

export default IntroQuiz;