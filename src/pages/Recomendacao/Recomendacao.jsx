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
        
        //console.log(errosFiltrados);
    
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
        <section className="booklist">
            <div className="container">
                <div className="section-title">
                    <h2 className='pb-2'>Recomendação de livros</h2>
                    <p className='pb-2'>{message}</p>
                </div>
                <div className="booklist-content grid">
                    {
                        bookData.map((item, index) => {
                            let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                            if(thumbnail!= undefined){
                                return(
                                    <Card key={index} {...item} />
                                )
                            }
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Recomendacao;