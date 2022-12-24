import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { db } from "../../servers/config";
import './index.css';

function PainelProfessor() {

    const [data, setData] = useState([]);

    const fetchData = async (turma) => {
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

    //console.log(data)

    return(
        <div className="painel">
            <div className="text-center">
                <div className="container">
                <h1 className="p-5">Painel do Professor</h1>
                <p text="text-painel">Aqui estão as turmas cadastradas no museu. Para ver os detalhes da turma, clique em "VER DETALHES".</p>

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
                            <h3 className="m-4">TURMA</h3>
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
                                <h3 className="m-4">TURMA</h3>
                            </div>
                            <div className="text-center m-3">
                                <Button className="btn-dgd-cards" onClick={() => fetchData("3TIT")}>VER DETALHES</Button>
                            </div>
                        </Card.Body>
                        </Card>
                    </div>
                </div>
                {
                    data.map(user => {
                        return(
                            <div className="container p-5">
                                <h2>TURMA</h2>
                                <table class="table">
                                    <thead className="thead">
                                        <tr>
                                        <th scope="col">Nome</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Pontuacao</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                        <td>{user.nome}</td>
                                        <td>{user.email}</td>
                                        <td>{user.pontuacao}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    );
}

export default PainelProfessor;