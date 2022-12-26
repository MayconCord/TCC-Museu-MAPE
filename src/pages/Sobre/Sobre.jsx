import React from "react";
import { Card, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './index.css'; 
import lara from '../../assets/lara.png';
import lilian from '../../assets/lilian.png';
import maycon from '../../assets/maycon.png';

function Sobre() {
    return(
        <div>
            <Header />
        <div className="sobre">
            <div className="container">
                <div className="p-3 pt-5 pb-2 text-center">
                    <h1>Sobre nós</h1>
                </div>
                <div className="m-5 mt-0 mb-0 text">
                    <p>O Museu Afro-PE éfaz parte do Trabalho de Conclusão do curso Técnico em Informática do Instituto Federal de Pernambuco - campus Garanhuns, pertencente aos discentes: Lara Emanuely, Lilian Oliveira e Maycon Cordeiro. </p>
                </div>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="m-3 mt-4">
                                <Card className="">
                                    <Card.Img variant="top" />
                                    <Card.Body>
                                        <div className="text-center">
                                            <Card.Title className="m-4 text-card">Humberto Beltrão</Card.Title>
                                            <Card.Text className="m-3 text-card sub">Orientador</Card.Text>
                                            <Card.Text className="m-3 text-card">Professor de Informática do IFPE campus Garanhuns</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="m-3 mt-4">
                                <Card className="">
                                    <Card.Img variant="top" />
                                    <Card.Body>
                                        <div className="text-center">                                            
                                            <Card.Title className="m-4 text-card">Ciro Azevedo</Card.Title>
                                            <Card.Text className="m-3 text-card sub">Co-orientador</Card.Text>
                                            <Card.Text className="m-3 text-card">Professor de História do IFPE campus Garanhuns</Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                        </div>
                    </div>
                </div>
                    
                <div className="m-3">
                    <h3>Equipe de desenvolvimento:</h3> 
                </div> 
                <div className="row">
                    <div className="col-sm-4">
                        <Card className="m-3">
                            <div className="text-center">
                                <Card.Img src={lara} className="img-card img-fluid mt-3" variant="top" />
                            </div>
                            <Card.Body>
                                <div className="text-center">
                                    <Card.Title className="m-4">Lara Emanuely</Card.Title>
                                    <Card.Text className="m-3 text-card">Estudante do 4° TI tarde</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4">
                        <Card className="m-3">
                            <div className="text-center">
                                <Card.Img src={lilian} className="img-card img-fluid mt-3" variant="top" />
                            </div>
                            <Card.Body>
                                <div className="text-center">
                                    <Card.Title className="m-4">Lilian Oliveira</Card.Title>
                                    <Card.Text className="m-3 text-card">Estudante do 4° TI tarde</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>            
                    <div className="col-sm-4">
                        <Card className="m-3">
                            <div className="text-center">
                                <Card.Img src={maycon} className="img-card img-fluid mt-3" variant="top" />
                            </div>
                            <Card.Body>
                                <div className="text-center">
                                    <Card.Title className="m-4">Maycon Cordeiro</Card.Title>
                                    <Card.Text className="m-3 text-card">Estudante do 4° TI tarde</Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </div>
    );
}

export default Sobre;