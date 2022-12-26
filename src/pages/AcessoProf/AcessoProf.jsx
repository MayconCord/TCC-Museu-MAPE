import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { Alert } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { AuthContext } from "../../contexts/AuthContext";

function AcessoProf({children}) {

    const [user, setUser] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [respostaRec, setRespostaRec] = useState("");

    const data = [{email: "ciro.azevedo@garanhuns.ifpe.edu.br", senha: "apd542QWE"}, {email:"mcc@discente.ifpe.edu.br", senha:"123456"}];


    const handleLogin = (e) => {
        e.preventDefault();
        for(let i=0; i<data.length; i++){
            if (data[i].email === email && data[i].senha === password){
                console.log("Professor logado");
                setUser(data[i]);
            } else {
                setRespostaRec("Email e/ou senha inválidos!");
                setShow(true)
            }
        }
    }

    useEffect(() => {
    }, []);

    if(user){
        return(<Outlet/>);
    }

    return(
        <div className="login">
            <Header/>
            <div className="container login-area">
                <div className="m-4">
                    <form method="POST" className="form">
                        <h1 className="p-3 text-center">Acesso do Professor</h1>
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
                                <p>Encontrou algum problema? Entre em contato conosco pelo e-mail: <a>museuafrope@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <Alert show={show} key="danger" variant="danger">{respostaRec}</Alert>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AcessoProf;