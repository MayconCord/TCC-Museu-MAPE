import React, { useContext, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Cadastro() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [serie, setSerie] = useState("");
    const [curso, setCurso] = useState("");
    const [turno, setTurno] = useState("");
    const turma = serie+curso+turno;

    const { user, cadastro } = useContext(AuthContext);

    return(
        <div className="cadastro">
            <div className="container">
                <div className="m-4">
                    <div className="form">
                        <h1 className="p-3 text-center">Cadastro</h1>
                        <div class="mb-3">
                            <label class="form-label">Nome:</label>
                            <input type="text" class="form-control" name="nome" id="nome" placeholder="Digite seu nome" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Turma:</label>
                            <div className="row">
                                <div className="col-sm-3">
                                    <select onChange={(e) => {setSerie(e.target.value)}} class="form-select form-select-sm" aria-label="Default select example">
                                        <option selected>Selcione a série/ano</option>
                                        <option value="1">1°</option>
                                        <option value="2">2°</option>
                                        <option value="3">3°</option>
                                        <option value="4">4°</option>
                                    </select>
                                </div>
                                <div className="col-sm-2">
                                    <select onChange={(e) => {setCurso(e.target.value)}} class="form-select form-select-sm" aria-label="Default select example">
                                        <option selected>Selcione o curso</option>
                                        <option value="TI">Informática</option>
                                        <option value="TMA">Meio Ambiente</option>
                                        <option value="TEE">Eletroeletrônica</option>
                                    </select>
                                </div>
                                <div className="col-sm-2">
                                    <select onChange={(e) => {setTurno(e.target.value)}} class="form-select form-select-sm" aria-label="Default select example">
                                        <option selected>Selcione o turno</option>
                                        <option value="M">Manhã</option>
                                        <option value="T">Tarde</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email:</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">Senha:</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label for="confirm-password" class="form-label">Confirme sua senha:</label>
                            <input type="password" class="form-control" name="confirm-password" id="confirm-password" placeholder="Digite sua senha" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                            <Button variant="primary" id="login-button" className="m-4 mb-3" onClick={cadastro}>Entrar</Button>
                            <div className="m-2">
                                <p className="text-card">Já possui uma conta? <Link to="/login" id="cadastro-button">Faça login clicando aqui.</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cadastro;