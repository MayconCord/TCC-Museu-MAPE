import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Charts from "./Charts";
import { db } from "../../servers/config";
import './index.css';

function PainelProfessor() {

    const [data, setData] = useState([]);
    const [turmaValue, setTurmaValue] = useState();

    const fetchData = async (turma) => {
        setTurmaValue(turma);
        let list = [];
        await db.collection("alunos").where("turma", "==", turma).get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                list.push({id: doc.id, ...doc.data()})
            });
            setData(list);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return(
        <div>
            <Header/>
        <div className="painel">
            <div className="">
                <div className="container">
                <h1 className="text-center p-5 pb-0 title-painel">Painel do Professor</h1>
                <h5 className="p-5 pt-3 pb-2 text-painel">Aqui estão as turmas cadastradas no museu. Para ver os detalhes da turma, clique em "VER DETALHES".</h5>

                <div className="row">
                    <div className="col-sm-4 p-3">
                        <Card className="">
                        <Card.Body>
                            <div className="text-center text-card">
                                <h3 className="m-4">4TIT</h3>
                            </div>
                            <div className="text-center m-3">
                                <Button className='btn-dgd-cards' onClick={() => fetchData("4TIT")}>VER DETALHES</Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 p-3">
                        <Card className="">
                        <Card.Body>
                            <div className="text-center text-card">
                            <h3 className="m-4">3TIM</h3>
                            </div>
                            <div className="text-center m-3">
                                <Button className="btn-dgd-cards" onClick={() => fetchData("3TIM")}>VER DETALHES</Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                    <div className="col-sm-4 p-3">
                        <Card className="">
                        <Card.Body>
                            <div className="text-center text-card">
                                <h3 className="m-4">3TMAT</h3>
                            </div>
                            <div className="text-center m-3">
                                <Button className="btn-dgd-cards" onClick={() => fetchData("3TIT")}>VER DETALHES</Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                            <div className="p-4">
                                <h5 className="p-4 pt-0 pb-0 text-painel">Escolha uma turma para listar os dados.</h5>
                                <h2 className="p-4 text-center title-div-table"> Turma: {turmaValue}</h2>
                                <div className="table-responsive-sm">
                                <table class="table listagem-alunos">
                                    <thead className="">
                                        <tr className="col-title">
                                            <th scope="col" className="title-table text-center">#</th>
                                            <th scope="col" className="title-table text-center">Nome</th>
                                            <th scope="col" className="title-table text-center">Email</th>
                                            <th scope="col" className="title-table text-center">Pontuação</th>
                                            <th scope="col" className="title-table text-center">Tentativa</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            data.map((user, index) => {
                                                return(
                                                    <tr className="table-data">
                                                        <td>{index+1}</td>
                                                        <td>{user.nome}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.pontuacao}</td>
                                                        <td>{user.tentativa}</td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>
                                </div>
                            </div>
                </div>
            </div>  
        </div>
        <Charts />
        <Footer />
        </div>
    );
}

export default PainelProfessor;