import React, { useState, useEffect, useContext } from 'react'
import Card from './Card/Card';
import axios from 'axios';
import { QuizContext } from '../../contexts/QuizContext';
import './index.css'

function Recomendacao(){

    const [quizState, dispatch] = useContext(QuizContext);
    const [bookData,setData] = useState([]);
    const [busca, setBusca] = useState("");
    var message = null;

    useEffect(()=>{
        const assuntosErrados = quizState.assuntosErrados;
        const erros = assuntosErrados.split("/");
        const errosFiltrados = erros.filter(function(i){
            return i;
        });
        
        console.log(errosFiltrados);
    
        if(errosFiltrados.length == 0) {
            setBusca("cultura afro brasileira");
        } else {
            setBusca(errosFiltrados[0]);
        }    
    });

    const searchBook=(e)=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${busca}&key=AIzaSyBBeuPF-EnQOOyhmc33JT26eZ5C8QmuvWk&maxResults=40`)
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err.response))
    }

    useEffect(() => {
        searchBook();
    }, [busca]);

    if(busca.length == 0) {
        message = <p>Parabéns, você acertou todas as questões do quiz! Vamos gerar uma recomendação para que você fique ainda mais craque no conteúdo.</p>
    } else {
        message = <p>Esses livros foram recomendados com base nos assuntos das questões que tiveram respostas erradas no quiz.</p>
    }

    return(
        <div className="recomend mb-4">
            <div>
                <h1>Recomendação de livros</h1>
                <div className="m-4 texto-escuro">{message}</div>
            </div>

            <div className="container-cards">
                <div className="row">
                    <Card book={bookData}/>
                </div>
            </div>
        </div>
    );
}

export default Recomendacao;