import React from "react";
// import "./App.css";
// import homeback from "./photo/home back.webp";
import Navbar from "./nav";
import "./home.css";
import Footer from "../footer/footer";
export default function Home(){
    return(
         <div className="home">
            <div className="navdiv">
            <Navbar />
            </div>
            <div className="container">
            <div className="text-block">
                <h1 className="text1">BE FABULOUS. BE EMPOWERED. BE BLOWN AWAY!</h1>
                <p className="text2">We're Committed to Service Excellence By EliteLove</p>
            </div>
            </div>
            <div className="footer-page">
            <Footer/>
            </div>
         </div>
    );
}