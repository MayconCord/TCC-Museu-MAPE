import React from "react";
import { Modal, Button } from "react-bootstrap";

function Modal2(props){
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
                    <h4 className="mb-4">Religião e Música</h4>
                    <p className="text-card">Para entender um pouco da história das religiões de matriz africana no Brasil, primeiro, é fundamental entender o que é sincretismo religioso, 
                        que consiste na fusão de práticas religiosas distintas. Mas, como isso se relaciona com as religiões de matriz africana?</p>
                    <p className="text-card">Os negros não podiam realizar seus cultos, nem seguir suas crenças, tampouco realizar seus rituais religiosos. Quando aqui chegavam, 
                        recebiam um nome em português, aprendiam a falar o português, e eram obrigados a se converter ao cristianismo, e consequentemente abandonar 
                        qualquer outra doutrina religiosa que seguiam.</p>
                    <p className="text-card">Os africanos trazidos para o Brasil tinham crenças e tradições religiosas diferentes. Portanto, para relembrar esses aspectos, 
                    não podemos tentar unificar a cultura africana e ignorar a pluralidade que existia naquele contexto.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn-dgd" onClick={props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Modal2;