import React,{useState} from "react";
import Card from "./card";
import axios from "axios";
const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter"){
         axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyCf635qRpywwooBdW-ahM9FIx6nuk_RYfI+&maxResults=40')
         .then(res=>setData(res.data.items))
         .catch(err=>console.log(err))
        }
    }
    return(
        <>
        <div className="header">
        <div className="row1">
           <h1>A room without book is like <br></br> a body without soul</h1>
        </div>
        <div className="row2">
        <h2>Find your book</h2>
        <div className="search">
            <input type="text" placeholder="Enter your book name"
            value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}/>
            <button><i class="fa fa-search"></i></button>    
        </div>
        <img src="./images/bookstore2.jpeg" alt=""/>
        </div>
        </div>
        <div class="container">
          {
            <Card book={bookData}/>
          }
        </div>
        </>
    )
};
export default Main;