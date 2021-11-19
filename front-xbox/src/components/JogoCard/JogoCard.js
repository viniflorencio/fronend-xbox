import React from "react";
import "./JogoCard.css"
import { Link } from "react-router-dom";



export default function JogoCard({ jogo }) {
    return (
        <div>
            <Link to={`/view/${jogo.id}`}>           
                <div className='div-card'>
                     <img src={jogo.capa}  alt={jogo.title}/>
                </div>
            </Link>        
        </div>
    )
}

