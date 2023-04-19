import React,{useState} from "react";
import Model from "./model";
const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem,setItem]=useState();
  return (
    <>
      {book.map((items) => {
        let thumbnail=items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
        let amount=items.saleInfo.listPrice && items.saleInfo.listPrice.amount;
        let title=items.volumeInfo.title
        if(thumbnail!==undefined&&amount!==undefined){
          return (
            <>
            <div className="card" onClick={()=>{setShow(true);setItem(items)}}>
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{title}</h3>
                <p className="amount">&#8377;{amount}</p>
              </div>
            </div>
            <Model show={show} items={bookItem} onClose={()=>setShow(false)}/>
            </>
          );
        }
       
      })}
    </>
  );
};
export default Card;
