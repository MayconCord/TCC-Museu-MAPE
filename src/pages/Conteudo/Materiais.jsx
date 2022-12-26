import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './index.css';

function Materiais() {
    return( 
        <div>
        <Header/>
            <div className='container'>
                <h2 className='text-center p-5 pb-3'>Materiais complementares</h2>
                <p className='text-center text-content pb-4'>Aqui você encontra materiais para complementar seus conhecimentos acerca da cultura afro-brasileira em Pernambuco.</p>
                
                <h4>Sites:</h4>
                <div className="p-2">
                    <p><a href="https://www.fuiserviajante.com/gastronomia/comidas-de-origem-africana/">Comida africana no Brasil: conheça pratos da culinária afro-brasileira. (Fui ser viajante)</a></p>
                    <p><a href="https://portalcapoeira.com/capoeira/mestres/mestre-decanio/fundamentos-da-capoeira-2/">FUNDAMENTOS DA CAPOEIRA. (Portal Capoeira)</a></p>
                    <p><a href="https://www.sabra.org.br/site/arte-africana/">As influências da cultura africana na arte brasileira. (SABRA - Sociedade Artística Brasileira)</a></p>
                    <p><a href="https://vidasimples.co/vida-social/no-dia-do-frevo-conheca-a-historia-e-a-beleza-do-ritmo-pernambucano/">Frevo: conheça a história e a beleza do ritmo pernambucano. (Vida Simples)</a></p>
                    <p><a href="https://www.brasildefatope.com.br/2022/03/21/cultura-e-a-religiosidade-de-matriz-africana-em-pernambuco-sao-destaque-no-prosa-e-fato">Cultura e a religiosidade de matriz africana em Pernambuco são destaque no Prosa e Fato. (Brasil de Fato)</a></p>
                    <p><a href="https://www.politize.com.br/religioes-de-matriz-africana/">Religiões de matriz africana: quais são e por que sofrem preconceito. (Politize)</a></p>
                    <p><a href="https://www.alepe.pe.gov.br/2022/05/16/racismo-contra-religioes-de-matriz-africana-e-alvo-de-debate-na-alepe/">Racismo contra religiões de matriz africana é alvo de debate na Alepe. (Assembleia Legislativa do Estado de Pernambuco)</a></p>
                </div>

                <h4>Vídeos:</h4>
                <div className="row text-center pb-5">
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/T5cGH2uWFd4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/NuYVjuwVrOI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/hQeN1snuSyY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
                <div className="row text-center pb-5">
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/fq2fwMvkRO8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/tSbl2LwFB1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-sm-4">
                    <iframe height="200" width="300" src="https://www.youtube.com/embed/hI4f2FfszWY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        <Footer/>
        </div>
    );
}

export default Materiais;