import React, { useState } from "react";
import ModalDetalhes from "../Modal/Modal";
import '../index.css';

function Card (item) {

    const [show, setShow] = useState(false);

    return (
        <div>
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
            </div>
            <ModalDetalhes show={show} onHide={() => setShow(false)} img={item.volumeInfo.imageLinks.thumbnail} title={item.volumeInfo.title} autor={item.volumeInfo.authors} publi={item.volumeInfo.publishedDate} pags={item.volumeInfo.pageCount} desc={item.volumeInfo.description} />
        </div>
    );
}
export default Card;