import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Books from '../../assets/books.png';
import Search from '../../assets/search.png';
import Fonts from '../../assets/fonts.png';

function Cards() {
    return(
        <div className="container pb-5">
            <div className="row p-3">
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img variant="top" src={Books} />
                    <Card.Body>
                        <div className="text-center">
                            <Card.Title className="m-3">Recomendação de Livros</Card.Title>
                            <Card.Text>Recomendação de livros de acordo com parâmetros pré-definidos pelo usuário.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Button variant="primary">SAIBA MAIS</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img variant="top" src={Search} />
                    <Card.Body>
                        <div className="text-center">
                            <Card.Title className="m-3">Materiais Complementares</Card.Title>
                            <Card.Text>Com o intuito de aprofundar os conhecimentos.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Button variant="primary">SAIBA MAIS</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
                <div className="col-sm-4 p-3">
                    <Card className="">
                    <Card.Img variant="top" src={Fonts} />
                    <Card.Body>
                        <div className="text-center">
                            <Card.Title className="m-3">Referências</Card.Title>
                            <Card.Text>Materiais que foram utilizados para a construção do conteúdo deste site.</Card.Text>
                        </div>
                        <div className="text-center m-3">
                            <Button variant="primary">SAIBA MAIS</Button>
                        </div>
                    </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default Cards;