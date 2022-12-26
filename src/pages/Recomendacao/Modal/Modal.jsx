import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './index.css';

function ModalDetalhes(props) {



    return(
        <div>
            <Modal
                {...props}
                size="lg"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-4 content-modal">
                    <div className="text-center">
                        <img src={props.img} className="pb-5"/>
                        <h5 className="content-modal mb-4 modal-titulo">{props.title}</h5>
                    </div>
                    <p className=""><b>Autor(es): </b>{props.autor}</p>
                    <p className=""><b>Publicação: </b>{props.publi}</p>
                    <p className="">{props.desc}</p>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default ModalDetalhes;