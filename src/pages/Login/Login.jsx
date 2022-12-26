import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

    const { login, e, c, recoverPassword } = useContext(AuthContext);

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
            <Header/>
            <div className="container login-area">
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
                                <p>Esqueceu a senha? <Link onClick={() => {handleRecoverPswd()}} id="recover-pswd">Recupere-a clicando aqui.</Link></p> 
                            </div>
                        </div>
                        <div className="mt-4">
                            <Alert show={show} key="danger" variant="danger">Ocorreu um problema, tente novamente. {e}</Alert>
                            <Alert show={showS} key="success" variant="success">{c}</Alert>
                            <Alert show={showErrorRec} key="warning" variant="warning">{respostaRec}</Alert>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Login;