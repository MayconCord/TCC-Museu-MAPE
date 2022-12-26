import React, { useContext, useState, useEffect, useRef } from "react";
import { Alert, OverlayTrigger, Popover } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './index.css'

function Cadastro() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serie, setSerie] = useState("");
    const [curso, setCurso] = useState("");
    const [turno, setTurno] = useState("");
    const [turma, setTurma] = useState("");
    const [confirmPswd, setConfirmPswd] = useState("");
    const [show, setShow] = useState(false);
    const [showS, setShowS] = useState(false);
    const [showConfirmPassword, setShowConfPswd] = useState(false);
    const ref = useRef(null);

    const { cadastro, cadErro, cadSucess } = useContext(AuthContext);

    useEffect(() => {
        if(cadErro){
            setShow(true);
            setShowS(false);
        }
    }, [cadErro]);

    useEffect(() => {
        if(cadSucess){
            setShow(false);
            setShowS(true);
        }
    }, [cadSucess]);

    useEffect(() => {
        setTurma(serie+curso+turno);
    }, [serie,curso,turno]);

    const handleCadastro = () => {
        cadastro(nome, email, password, turma);
    }

    /*const handleConfirmPswd = (e) => {
        setConfirmPswd(e);
        if(confirmPswd !== password){
            setShowConfPswd(true);
        } else{
            setShowConfPswd(false);
        }
    }*/

    return(
        <div>
            <Header />
        <div className="cadastro">
            <div className="container">
                <div className="m-4">
                    <div className="form-container">
                        <h1 className="p-3 text-center">Cadastro</h1>
                        <form>
                        <div class="mb-3">
                            <label class="form-label">Nome:*</label>
                            <input type="text" class="form-control" name="nome" id="nome" placeholder="Digite seu nome" required onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <div className="row">
                                <label class="form-label">Turma:*</label>
                                <div className="row">
                                    <div className="col-sm-4 mb-1">
                                        <select onChange={(e) => {setSerie(e.target.value)}} class="form-select form-select-sm" required aria-label="Default select example">
                                            <option selected disabled>Selecione a série/ano</option>
                                            <option value="1">1°</option>
                                            <option value="2">2°</option>
                                            <option value="3">3°</option>
                                            <option value="4">4°</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 mb-1">
                                        <select onChange={(e) => {setCurso(e.target.value)}} class="form-select form-select-sm" required aria-label="Default select example">
                                            <option selected disabled>Selecione o curso</option>
                                            <option value="TI">Informática</option>
                                            <option value="TMA">Meio Ambiente</option>
                                            <option value="TEE">Eletroeletrônica</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4 mb-1">
                                        <select onChange={(e) => {setTurno(e.target.value)}} class="form-select form-select-sm" required aria-label="Default select example">
                                            <option selected disabled>Selecione o turno</option>
                                            <option value="M">Manhã</option>
                                            <option value="T">Tarde</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Email:*</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Digite seu email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Senha:*</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Confirme sua senha:*</label>
                            <input type="password" class="form-control" name="confirm-password" id="confirm-password" required placeholder="Digite sua senha" />
                        </div>
                        </form>
                        <div className="text-center">
                            <button id="login-button" className="m-4 mb-3 btn-dgd" onClick={() => handleCadastro()}>Cadastrar</button>
                            <div className="m-2">
                                <p className="text-card">Já possui uma conta? <Link to="/login" id="cadastro-button">Faça login clicando aqui.</Link></p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-4">
                        <Alert show={show} key="danger" variant="danger">Ocorreu um problema, tente novamente. {cadErro}</Alert>
                        <Alert show={showS} key="success" variant="success">{cadSucess}</Alert>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Cadastro;