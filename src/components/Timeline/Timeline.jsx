import React, { useEffect } from 'react';
import './index.css';
import Modal1 from '../Modais/Modal';
import Modal2 from '../Modais/Modal2';
import Modal3 from '../Modais/Modal3';
import Modal4 from '../Modais/Modal4';


function Timeline() {

    const [modalShow, setModalShow] = React.useState(false);
    const [modalShow2, setModalShow2] = React.useState(false);
    const [modalShow3, setModalShow3] = React.useState(false);
    const [modalShow4, setModalShow4] = React.useState(false);


    useEffect(() => {
        function showModal1(){}
        const tema1 = document.getElementById("tema1");
        tema1.addEventListener('click', () => {setModalShow(true)});
        const tema3 = document.getElementById("tema3");
        tema3.addEventListener('click', () => {setModalShow2(true)});
        const tema4 = document.getElementById("tema4");
        tema4.addEventListener('click', () => {setModalShow3(true)});
        const tema5 = document.getElementById("tema5");
        tema5.addEventListener('click', () => {setModalShow4(true)});
    }, [])

    return(
        <div class="container py-5">
            <div class="main-timeline-4 text-white">
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema1" >
                        <div class="card-body p-4">
                        <i class="fas fa-brain fa-2x mb-3"></i>
                        <h4>Início do Tráfico Atlântico</h4>
                        <p>Em meados do século XVI, o comércio de africanos 
                            escravizados se tornava um negócio lucrativo para os portugueses.
                        </p>
                        </div>
                    </div>
                </div>
                <div class="timeline-4 right-4">
                    <div class="card gradient-custom-4" id="tema2">
                        <div class="card-body p-4">
                        <i class="fas fa-camera fa-2x mb-3"></i>
                        <h4>A resistência</h4>
                        <p>O povo africano, mesmo que brutalmente reprimido, continuou praticando  suas crenças, cultuando suas religiões,
                            e passaram esses costumes de geração em geração.
                        </p>
                        </div>
                    </div>
                </div>
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema3">
                        <div class="card-body p-4">
                        <i class="fas fa-campground fa-2x mb-3"></i>
                        <h4>Religião e Música</h4>
                        <p>Podemos dizer que as religiões africanas estiveram no Brasil desde que o povo negro aqui chegou. Lembrando que não existia uma 
                                        homogeneidade religiosa, os escravizados tinham diferentes religiões. A música está totalmente vinculada aos rituais religiosos africanos. 
                        </p>
                        </div>
                    </div>
                </div>
                <div class="timeline-4 right-4">
                    <div class="card gradient-custom-4" id="tema4">
                        <div class="card-body p-4">
                        <i class="fas fa-sun fa-2x mb-3"></i>
                        <h4>Maracatu</h4>
                        <p>Uma das primeiras expressões explícitas de vivências dos povos negros nos seus países de origem, representando incialmente a coroação 
                                        de reis do Congo. Essa prática foi incrementada com o passar do tempo.</p>
                        </div>
                    </div>
                </div>
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema5">
                        <div class="card-body p-4">
                        <i class="fas fa-palette fa-2x mb-3"></i>
                        <h4>Capoeira e Frevo</h4>
                        <p>A capoeira era uma luta desenvolvida pelos africanos, vezes disfarçada de brincadeira, influenciou diretamente o frevo que, era uma mistura 
                                    de dança, luta e música, foi uma importante ferramenta de resistência do povo negro à violência imposta pela sociedade da época.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal1 show={modalShow} onHide={() => setModalShow(false)} />
            <Modal2 show={modalShow2} onHide={() => setModalShow2(false)} />
            <Modal3 show={modalShow3} onHide={() => setModalShow3(false)} />
            <Modal4 show={modalShow4} onHide={() => setModalShow4(false)} />
        </div>
    );
}

export default Timeline;