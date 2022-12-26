import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import PainelAluno from '../Aluno/PainelAluno';
import Books from '../../assets/books.png';
import Search from '../../assets/search.png';
import Fonts from '../../assets/fonts.png';
import { Link } from 'react-router-dom';
import './index.css';

function Cards() {

    const [show, setShow] = useState(false);

    return(
        <div className="cards">
        <div className="container pb-2">
            <div className="row p-3">
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img className="mt-3" variant="top" src={Books} />
                    <Card.Body>
                        <div className="text-center text-card">
                            <Card.Title className="m-3">Meu desempenho</Card.Title>
                            <Card.Text className="text-card sub">Acompanhe como você se saiu no quiz.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Button className='btn-dgd-cards' onClick={() => {setShow(true)}}>SAIBA MAIS</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img className="mt-3" variant="top" src={Search} />
                    <Card.Body>
                        <div className="text-center text-card">
                            <Card.Title className="m-3">Materiais Complementares</Card.Title>
                            <Card.Text className="text-card sub">Com o intuito de aprofundar os conhecimentos.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Link to="/materiais"><Button className="btn-dgd-cards">SAIBA MAIS</Button></Link>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img className="mt-3" variant="top" src={Fonts} />
                    <Card.Body>
                        <div className="text-center text-card">
                            <Card.Title className="m-3">Referências</Card.Title>
                            <Card.Text className="text-card sub">Materiais utilizados para a construção do museu.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Link to="/referencias"><Button className="btn-dgd-cards">SAIBA MAIS</Button></Link>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        <PainelAluno show={show} onHide={() => setShow(false)} />

        </div>
    );
}

export default Cards;