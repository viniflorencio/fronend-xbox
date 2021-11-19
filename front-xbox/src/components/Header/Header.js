import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";


export default function Header() {
    return (
        <div>
            <ul className="container-option">

                <Link to='/adinm'><li>Administrador</li></Link>
                <Link to='/home'><li>Jogos</li></Link>



            </ul>
        </div>
    )
}
