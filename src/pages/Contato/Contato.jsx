import React from "react";
import './index.css';

function Contato() {
    return(
        <div className="contato">
            <div className="container">
                <div className="p-3 text-center">
                    <h1 className="m-4">Formulário para contato</h1>
                    <h5 className="mt-5">Ficou com dúvida em alguma parte do conteúdo? Gostaria de tirar dúvidas ou relatar problemas com a utilização do sistema?
                        Utilize o fomrulário a baixo para entrar em contato com a nossa equipe.</h5>
                </div>
                <div class="mt-0 mb-3">
                    <label for="nome" class="form-label">Nome:</label>
                    <input type="text" class="form-control" id="nome" placeholder="Digite seu email" />
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Email:</label>
                    <input type="email" class="form-control" id="email" placeholder="Digite seu email" />
                </div>
                <div class="mb-3">
                    <label for="duvida" class="form-label">Mensagem</label>
                    <textarea class="form-control" placeholder="Digite sua mensagem" id="duvida" rows="3"></textarea>
                </div>
                <div className="text-center">
                    <button className="btn btn-primary">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Contato;