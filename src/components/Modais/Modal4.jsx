import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modal4(props){
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
                    <h4>Capoeira e Frevo</h4>
                    <p className="text-card">Surgiram no fim do século XIX, num contexto de pós abolição da escravidão, proclamação da república e dos primeiros 
                    passos do processo de urbanização do Brasil, ou seja, um cenário repleto de movimentações políticas, econômicas e principalmente sociais. 
                    Suas origens estão ligadas diretamente à situação de vida da população negra nesse contexto turbulento.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-dgd" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modal4;