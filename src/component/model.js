import React from "react";
const Model=({show,items,onClose})=>{
    if(!show){
        return null;
    }
    let thumbnail=items.volumeInfo.imageLinks && items.volumeInfo.imageLinks.smallThumbnail;
    return(
        <>
        <div className="overlay">
            <div className="overlay-inner">
                <button className="close" onClick={onClose}><i class="fa fa-times"></i></button>
                <div className="inner-box">
                    <img src={thumbnail} alt=""/>
                    <div className="bio">
                        <h1>{items.volumeInfo.title}</h1>
                        <h3>{items.volumeInfo.authors}</h3>
                        <h4>{items.volumeInfo.publisher} <span>{items.volumeInfo.publishedDate}</span></h4><br/>
                        <a href={items.volumeInfo.previewLink}><button>More</button></a>
                    </div>
                </div>
                <h4 className="description">{items.volumeInfo.description}</h4>
            </div>
        </div>
        </>
    )
}
export default Model;