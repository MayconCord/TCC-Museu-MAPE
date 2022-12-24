import React, { useContext, useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { AuthContext } from "../../contexts/AuthContext";
import './index.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [showS, setShowS] = useState(false);

    const { login, e, c } = useContext(AuthContext);

    useEffect(() => {
        if(e){
            setShow(true);
            setShowS(false)
        }
    }, [e]);

    useEffect(() => {
        if(c){
            setShow(false);
            setShowS(true)
        }
    }, [c])

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password)
    }


    return(
        <div className="login">
            <div className="container">
                <div className="m-4">
                    <form method="POST" className="form">
                        <h1 className="p-3 text-center">Login Aluno</h1>
                        <div class="mb-3">
                            <label class="form-label">Email:</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Digite seu email" required onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Senha:</label>
                            <input type="password" class="form-control" name="password" id="password" placeholder="Digite sua senha" required onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="text-center">
                            <button id="login-button" className="m-4 mb-3 btn-dgd" onClick={(e) => handleLogin(e)}>Entrar</button>
                            <div className="m-2">
                                <p>Ainda não possui uma conta? <Link to="/cadastro" id="cadastro-button">Crie uma clicando aqui.</Link></p>
                            </div>
                            <div className="m-3">
                                <p>Esqueceu a senha? <Link onClick={() => {}} id="recover-pswd">Recupere-a clicando aqui.</Link></p> 
                            </div>
                        </div>
                        <div className="mt-4">
                            <Alert show={show} key="danger" variant="danger">Ocorreu um problema, tente novamente. {e}</Alert>
                            <Alert show={showS} key="success" variant="success">{c}</Alert>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;