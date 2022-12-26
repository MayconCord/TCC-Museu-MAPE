import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './index.css';

function Referencias() {
    return( 
        <div className=''>
        <Header/>
            <div className='container conteudo'>
                <h2 className='text-center p-5 pb-3'>Referências</h2>
                <p className='text-center text-content pb-5'>Materias que foram consultados e utilizados como base para a produção do conteúdo do MAPE.</p>

                <p className='text-content'>EDUCAMAIS BRASIL. MARACATU. Disponível em: https://www.educamaisbrasil.com.br/ enem/artes/maracatu. Acesso em: 17 out. 2021.</p>
                <p className='text-content'>G1 GLOBO. Aprenda diferenças entre os três tipos de frevo: canção, de rua e de bloco. Disponível em: https://g1.globo.com/pe/pernambuco/ carnaval/2019/noticia/2019/02/25/ aprenda-diferencas-entre-os-tres-tipos-de-frevo-cancao-de-rua-e-de-bloco.ghtml. Acesso em: 16 out. 2021.</p>
                <p className='text-content'>NA PONTA DO PÉ. Conheça a história do frevo, sua dança e vertentes.. Disponível em: https://www.napontadope.com/ conheca-a-historia-do-frevo-sua-danca-e-vertentes/. Acesso em: 18 out. 2021.</p>
                <p className='text-content'>SARAIVA, Emmanuel De Jesus. A influência africana na cultura brasileira. Clube de Autores, 2015.</p>
                <p className='text-content'>JÚNIOR, Amaro Xavier Braga.  Revista Internacional de Folkcomunicação, v. 10, n. 21, p. 68-87, 2012.</p>
                <p className='text-content'>FONTOURA, Adriana Raquel Ritter; DE AZEVEDO GUIMARÃES, Adriana Coutinho. História da capoeira. Journal of Physical Education, v. 13, n. 2, p. 141-150, 2002.</p>
                
            </div>
        <Footer/>
        </div>
    );
}

export default Referencias;