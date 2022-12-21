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
                            <div className="card col-sm-3" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" className="card-img-top" />
                                <div className="card-body">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="card-text">&#8377;{amount}</p>
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