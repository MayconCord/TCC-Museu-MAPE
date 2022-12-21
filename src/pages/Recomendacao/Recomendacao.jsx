import React, { useState, useEffect } from 'react'
import Card from './Card/Card';
import axios from 'axios';

function Recomendacao(props){

    const [bookData,setData]=useState([]);

    const searchBook=(e)=>{
        axios.get(`https://www.googleapis.com/books/v1/volumes?q='${props.busca}'&key=AIzaSyBBeuPF-EnQOOyhmc33JT26eZ5C8QmuvWk'+'&maxResults=40`)
        .then(res=>setData(res.data.items))
        .catch(err=>console.log(err))
    }

    useEffect(() => {
        searchBook()
    }, [])
    
    return(
        <div>
            <div className="container">
                <div className="row">
                    {
                        <Card book={bookData}/>
                    }  
                </div>
            </div>
        </div>
    );
}

export default Recomendacao;