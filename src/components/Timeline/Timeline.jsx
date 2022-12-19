import React, { useEffect } from 'react';
import './index.css';
import Modal1 from '../Modais/Modal';
import Modal2 from '../Modais/Modal2';
import Modal3 from '../Modais/Modal3';
import Modal4 from '../Modais/Modal4';
import Modal5 from '../Modais/Modal5';
import Modal6 from '../Modais/Modal6';


function Timeline() {

    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        const tema1 = document.getElementById("tema1");
        tema1.addEventListener('click', () => {setModalShow(true)});
        const tema2 = document.getElementById("tema2");
        tema2.addEventListener('click', () => {setModalShow(true)});
        const tema3 = document.getElementById("tema3");
        tema3.addEventListener('click', () => {setModalShow(true)});
        const tema4 = document.getElementById("tema4");
        tema4.addEventListener('click', () => {setModalShow(true)});
        const tema5 = document.getElementById("tema5");
        tema5.addEventListener('click', () => {setModalShow(true)});
        const tema6 = document.getElementById("tema6");
        tema6.addEventListener('click', () => {setModalShow(true)});
    }, [])

    return(
        <div class="container py-5">
            <div class="main-timeline-4 text-white">
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema1" >
                        <div class="card-body p-4">
                        <i class="fas fa-brain fa-2x mb-3"></i>
                        <h4>Início do Tráfico Atlântico</h4>
                        <p class="small text-white-50 mb-4">May 21</p>
                        <p>Em meados do século XVI, o comércio de africanos 
                            escravizados se tornava um negócio lucrativo para os portugueses.
                        </p>
                        </div>
                        <Modal1 show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                </div>
                <div class="timeline-4 right-4">
                    <div class="card gradient-custom-4" id="tema2">
                        <div class="card-body p-4">
                        <i class="fas fa-camera fa-2x mb-3"></i>
                        <h4>A resistência</h4>
                        <p class="small text-white-50 mb-4">May 18</p>
                        <p>O povo africano, mesmo que brutalmente reprimido, continuou praticando  suas crenças, cultuando suas religiões,
                            e passaram esses costumes de geração em geração.
                        </p>
                        </div>
                        <Modal2 show={modalShow} onHide={() => setModalShow(false)} />
                    </div>
                </div>
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema3">
                        <div class="card-body p-4">
                        <i class="fas fa-campground fa-2x mb-3"></i>
                        <h4>Religião e Música</h4>
                        <p class="small text-white-50 mb-4">May 6</p>
                        <p>Podemos dizer que as religiões africanas estiveram no Brasil desde que o povo negro aqui chegou. Lembrando que não existia uma 
                                        homogeneidade religiosa, os escravizados tinham diferentes religiões. A música está totalmente vinculada aos rituais religiosos africanos. 
                        </p>
                        </div>
                    </div>
                    <Modal3 show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div class="timeline-4 right-4">
                    <div class="card gradient-custom-4" id="tema4">
                        <div class="card-body p-4">
                        <i class="fas fa-sun fa-2x mb-3"></i>
                        <h4>Arte</h4>
                        <p class="small text-white-50 mb-4">Apr 26</p>
                        <p>As manifestações artísticas são ligadas a resistência, a tentativa de fuga da estrutura repressiva, de representar vivências por meio da liberdade.
                        </p>
                        </div>
                    </div>
                    <Modal4 show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div class="timeline-4 left-4">
                    <div class="card gradient-custom" id="tema5">
                        <div class="card-body p-4">
                        <i class="fas fa-palette fa-2x mb-3"></i>
                        <h4>Maracatu</h4>
                        <p class="small text-white-50 mb-4">Apr 12</p>
                        <p>Uma das primeiras expressões explícitas de vivências dos povos negros nos seus países de origem, representando incialmente a coroação 
                                        de reis do Congo. Essa prática foi incrementada com o passar do tempo.
                        </p>
                        </div>
                    </div>
                    <Modal5 show={modalShow} onHide={() => setModalShow(false)} />
                </div>
                <div class="timeline-4 right-4">
                    <div class="card gradient-custom-4" id="tema6">
                        <div class="card-body p-4">
                        <i class="fas fa-laugh-beam fa-2x mb-3"></i>
                        <h4>Capoeira e Frevo</h4>
                        <p class="small text-white-50 mb-4">Apr 11</p>
                        <p>A capoeira era uma luta desenvolvida pelos africanos, vezes disfarçada de brincadeira, influenciou diretamente o frevo que, era uma mistura 
                                    de dança, luta e música, foi uma importante ferramenta de resistência do povo negro à violência imposta pela sociedade da época.
                        </p>
                        </div>
                    </div>
                    <Modal6 show={modalShow} onHide={() => setModalShow(false)} />
                </div>
            </div>
        </div>
    );
}

export default Timeline;