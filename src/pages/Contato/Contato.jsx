import React, { useState } from "react";
import './index.css';
import { Alert } from "react-bootstrap";
import emailjs from '@emailjs/browser';

function Contato() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [show, setShow] = useState(false);

    function sendEmail(e){
        e.preventDefault();
        const templateParams = {
            from_name: name,
            message: message,
            email: email,
        }
    
        emailjs.send("service_gxpnbbj", "template_j76d27c", templateParams, "c5tGFQhVSkjhjCdLl")
        .then((response) => {
            console.log("Email enviado!")
            setName('');
            setEmail('');
            setMessage('');
            setShow(true);
        }, (err) => {
            console.log(err)
        })
    }

    return(
        <div className="contato">
            <div className="container">
                <div className="p-3 text-center">
                    <h1 className="m-3">Formulário para contato</h1>
                    <h5 className="mt-5">Ficou com dúvida em alguma parte do conteúdo? Gostaria de tirar dúvidas ou relatar problemas com a utilização do sistema?
                        Utilize o fomrulário a baixo para entrar em contato com a nossa equipe.</h5>
                </div>
                <form onSubmit={sendEmail}>
                    <div class="mt-0 mb-3">
                        <label class="form-label">Nome:*</label>
                        <input type="text" class="form-control" id="nome" placeholder="Digite seu email" onChange={e => setName(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Email:*</label>
                        <input type="email" class="form-control" id="email" placeholder="Digite seu email" onChange={e => setEmail(e.target.value)} required />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Mensagem:*</label>
                        <textarea class="form-control" placeholder="Digite sua mensagem" id="duvida" onChange={e => setMessage(e.target.value)} rows="3" required></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary" onClick={e => sendEmail(e)}>Enviar</button>
                    </div>
                    <Alert show={show} key="success" variant="success">Email enviado com sucesso!</Alert>
                </form>
            </div>
        </div>
    );
}

export default Contato;