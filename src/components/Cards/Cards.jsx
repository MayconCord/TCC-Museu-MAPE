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
                            <Card.Title className="m-2">Recomendação de Livros</Card.Title>
                        </div>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <div className="text-center">
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
                            <Card.Title className="m-2">Materiais Complementares</Card.Title>
                        </div>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <div className="text-center">
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
                            <Card.Title className="m-2">Referências</Card.Title>
                        </div>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <div className="text-center">
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