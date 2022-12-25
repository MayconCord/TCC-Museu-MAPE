import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import '../index.css';

function Card (item) {

    const [show,setShow]=useState(false);

    return (
            <div className='book-item flex flex-column flex-sb' onClick={() => setShow(true)}>
                <div className='book-item-img'>
                    <img src={item.volumeInfo.imageLinks.thumbnail} alt="cover" className="card-img-top img-fluid" />
                </div>
                <div className='book-item-info text-center'>
                    <div className='book-item-info-item title fw-7 fs-18'>
                        <span>{item.volumeInfo.title}</span>
                    </div>

                    <div className='book-item-info-item author fs-15'>
                    <span className='text-capitalize fw-7'>Autoria: </span>
                    <span>{item.volumeInfo.authors}</span>
                    </div>

                    <div className='book-item-info-item edition-count fs-15'>
                    <span className='text-capitalize fw-7'>Publicação: </span>
                    <span>{item.volumeInfo.publishedDate}</span>
                    </div>

                    <div className='book-item-info-item publish-year fs-15'>
                    <span className='text-capitalize fw-7'>Páginas: </span>
                    <span>{item.volumeInfo.pageCount}</span>
                    </div>
                </div>
                <Modal show={show} centered>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body className="p-4">
                        <img src={item.volumeInfo.imageLinks.thumbnail} alt="cover" className="" />
                        <h4 className="mb-4">{item.volumeInfo.title}</h4>
                        <p className="text-card">{item.volumeInfo.authors}</p>
                        <p className="text-card">{item.volumeInfo.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={setShow(false)} className="btn-dgd">Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
    );
}
export default Card;