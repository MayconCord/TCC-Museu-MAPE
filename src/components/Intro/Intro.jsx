import React, { useState, useEffect, useContext} from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './index.css';

function Intro() {

    return(
        <div className="container p-5 pb-0">
            <div class="introduction-container">
                <div class="introduction">
                    <h2 class="pb-2">Olá, seja bem-vindo(a) ao Museu Afro PE!</h2>
                    <h5 class="subtitle i-content">Aqui buscaremos tratar sobre as heranças culturais africanas em Pernambuco, destacando sua importância na construção 
                        cultural brasileira e pernambucana.</h5>
                </div>
            </div>
        </div>
    );
}

export default Intro;