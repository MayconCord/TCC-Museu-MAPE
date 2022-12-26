import React, { useState, useContext, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import { db } from "../../servers/config";

function PainelAluno(props){

    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const [turma, setTurma] = useState();
    const [pontos, setPontos] = useState();
    const [tent, setTent] = useState(); 

    const storageUser = JSON.parse(sessionStorage.getItem("@AuthFirebase:user"));

    if(!storageUser){
        return null;
    } else{

    //console.log(storageUser.uid);
    //const user = listaAluno();
    let data = "";
    const pegaDados = async () => {
        let aluno = [];
        await db.collection("alunos").doc(storageUser.uid).get().then((doc) => {
            aluno = doc.data();
            setNome(aluno.nome);
            setEmail(aluno.email);
            setTurma(aluno.turma);
            setPontos(aluno.pontuacao);
            setTent(aluno.tentativa);
            return aluno;
        }).catch((error) => {
            console.log("Error getting documents: ", error);
        });
    }

    useEffect(() => {
        pegaDados();
    })

    return(
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4">
                    <h4 className="mb-4 text-center">Olá, <b>{nome}</b>!</h4>
                    <h6 className="text-card">Seja bem-vindo(a) ao painel do Aluno. Aqui você pode acompanhar as pontuações que você obteve no quiz e também ter acesso às informações da sua conta.</h6>
                    <p className="text-card"><b>Turma:</b> {turma}</p>
                    <p className="text-card"><b>Email:</b> {email}</p>
                    <p className="text-card"><b>Pontuação:</b> {pontos}</p>
                    <p className="text-card"><b>Número de tentativas:</b> {tent}</p>

                </Modal.Body>
            </Modal>
        </div>
    );
    }
}

export default PainelAluno;