import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modal3(props){
    return(
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4 className="mb-4">Maracatu</h4>
                    <p className="text-card">É um conjunto de manifestações artístico-culturais que surgiram em territórios pernambucanos, da vivência dos escravizados e 
                        uma expressão de suas memórias sobre seus países de origem.</p>
                    <p className="text-card">Existem tipos diferentes de maracatu. Um deles é o Maracatu Nação, também conhecido como Baque Virado, que tem influência da 
                    tradição de coroação de reis na África e do candomblé. Alguns de seus personagens são: Rei, Rainha e Baianas Ricas, que trazem consigo representações 
                    dos Orixás, e seus cortejos lembram as antigas e diversas cortes africanas.</p>
                    <p className="text-card">O outro tipo é o Maracatu Rural, que surgiu em meados do século XIX, de brincadeiras de agricultores. Seu principal 
                    personagem é o caboclo de lança, que carrega lanças de 2 metros. Atualmente, tem homenagens à luta dos trabalhadores rurais por seus direitos.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-dgd" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modal3;