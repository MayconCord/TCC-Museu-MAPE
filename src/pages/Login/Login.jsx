import React from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './index.css';

function Login() {
    return(
        <div className="login">
            <div className="container">
                <div className="p-5 text-center">
                    <h1>Login Aluno</h1>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Senha:</label>
                    <input type="password" class="form-control" id="password" placeholder="Digite sua senha" />
                </div>
                <div className="text-center">
                    <Button variant="primary">Entrar</Button>
                </div>
                <div className="text-center">
                    <div className="mt-4">
                        <Link to="/cadastro">Ainda não possui uma conta? Crie uma clicando aqui.</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/recuperacao">Esqueci a senha.</Link>
                    </div>
                    <div className="mt-4">
                        <Link to="/cadastro">Acesso do professor.</Link>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Login;