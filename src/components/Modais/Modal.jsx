import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modal1(props){
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
                <Modal.Body className="p-4">
                    <h4 className="mb-4">Início do Tráfico Atlântico</h4>
                    <p className="text-card">Os escravizados eram transportados de seus países de origem para cá em condições insalubres: completamente amontoados nos porões de embarcações minúsculas, 
                        sobrevivendo com escassos alimentos e sem nenhum tipo de higiene sanitária.</p>
                    <p className="text-card">Os europeus lucravam com essa prática por meio da venda dos escravizados para senhores de engenho e fazendeiros. Quando chegavam a seus “destinos”, 
                        eram-lhes impostas condições totalmente degradantes: não tinham acesso a algum tipo de alimentação decente, tampouco vestimentas adequadas.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onHide} className="btn-dgd">Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modal1;