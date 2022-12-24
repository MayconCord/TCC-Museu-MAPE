import React, { useState } from "react";
import Modal from "../Modal/Modal";

function Card ({ book }) {

    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    console.log(book);

    return (
        <>
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined){
                        return (
                            <>
                            <div className="card col-sm-2" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" className="card-img-top img-fluid" />
                                <div className="card-body">
                                    <h5 className="title">{item.volumeInfo.title}</h5>
                                    <p className="card-text">Autor(es): {item.volumeInfo.authors}</p>
                                    <p className="card-text">Publicação: {item.volumeInfo.publishedDate}</p>
                                    <p className="card-text">{item.volumeInfo.pageCount} páginas</p>
                                </div>
                            </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>
                        )
                    }
                    
                })
            }
        </>
    );
}
export default Card;