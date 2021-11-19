import React from 'react';
import { useHistory } from "react-router";
import './Jogo.css';


export default function Jogo( { jogo }) {

    const history = useHistory();

    const handleClick = () => {
        history.push(`/jogo/view/${jogo.id}`);

    };

    return (
        <div>

            <div className="jogos"  onClick={handleClick}>
                    <div className="jogo">
                        <img src={jogo.capa}></img>
                        <p>{jogo.title}</p> 
                    </div>
                </div>
            
        </div>
    )
}
