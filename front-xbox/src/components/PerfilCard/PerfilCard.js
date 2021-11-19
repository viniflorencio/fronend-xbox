import React from 'react';
import { Link } from "react-router-dom";
import "./PerfilCard.css"


export default function PerfilCard( { perfil }) {
    return (
        <div className="perfil">
                <Link to='/'>
                    <div className='container-container'>
                        <img className='perfil-img' src={perfil.imagem} alt={perfil.titulo}/>         
                    </div>        
                </Link>
            
        </div>
    )
}
