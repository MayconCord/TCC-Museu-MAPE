import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";
import './index.css';

function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [showS, setShowS] = useState(false);
    const [showErrorRec, setShowErrorRec] = useState(false);
    const [respostaRec, setRespostaRec] = useState("");
    const [showErrorEmail, setShowErrorEmail] = useState(false);
    const [errorEmail, setErrorEmail] = useState("");
    const [showErrorPswd, setShowErrorPswd] = useState(false);
    const [errorPswd, setErrorPswd] = useState("");
    const minPwdLength = 6;

    const { user, login, e, c, recoverPassword } = useContext(AuthContext);

    const handleRecoverPswd = () => {
        if(!email){
            setRespostaRec("Preencha o campo de email!");
            setShowErrorRec(true);
        } else {
            recoverPassword(email);
            setRespostaRec("Email de recuperação enviado!");
            setShowErrorRec(true);
        }
    }

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const validationsEmail = (e) => {
        setEmail(e);
        const r = validateEmail(e);
        if(!r){
            setErrorEmail("Digite um email válido")
            setShowErrorEmail(true)
        } else{
            setShowErrorEmail(false)
        }
    }

    const validationsSenha = (e) => {
        setPassword(e);
        if(password.length < minPwdLength){
            setShowErrorPswd(true);
            setErrorPswd("Digite uma senha que possua mais de 6 caracteres ")
        } else {
            setShowErrorPswd(false);
        }
    }

    useEffect(() => {
        if(e){
            setShow(true);
            setShowS(false);
        }
    }, [e]);

    useEffect(() => {
        if(c){
            setShow(false);
            setShowS(true);
        }
    }, [c])

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    }

    if(user){
        <Navigate to="/"/>
    }

    return(
        <div className="login">
            <Header/>
            <div className="container login-area">
                <div className="m-4">
                        <h1 className="p-3 text-center">Login Aluno</h1>
                        <div class="mb-3">
                            <label class="form-label">Email:</label>
                            <input type="email" class="pb-2 form-control" name="email" id="email" placeholder="Digite seu email" onChange={(e) => validationsEmail(e.target.value)} />
                            <Alert show={showErrorEmail} key="danger" variant="danger">{errorEmail}</Alert>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Senha:</label>
                            <input type="password" class="pb-2 form-control" name="password" id="password" placeholder="Digite sua senha" onChange={(e) => validationsSenha(e.target.value)} />
                            <Alert show={showErrorPswd} key="danger" variant="danger">{errorPswd}</Alert>
                        </div>
                        <div className="text-center">
                            <button id="login-button" className="m-4 mb-3 btn-dgd" disabled={!validateEmail(email)} onClick={(e) => handleLogin(e)}>Entrar</button>
                            <div className="m-2">
                                <p>Ainda não possui uma conta? <Link to="/cadastro" id="cadastro-button">Crie uma clicando aqui.</Link></p>
                            </div>
                            <div className="m-3">
                                <p>Esqueceu a senha? <Link onClick={() => {handleRecoverPswd()}} id="recover-pswd">Recupere-a clicando aqui.</Link></p> 
                            </div>
                        </div>
                        <div className="mt-4">
                            <Alert show={show} key="danger" variant="danger">Ocorreu um problema, tente novamente. {e}</Alert>
                            <Alert show={showS} key="success" variant="success">{c}</Alert>
                            <Alert show={showErrorRec} key="warning" variant="warning">{respostaRec}</Alert>
                        </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;