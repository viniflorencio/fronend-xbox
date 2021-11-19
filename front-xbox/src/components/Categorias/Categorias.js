import React from 'react';
import { useHistory } from 'react-router';
import './Categoria.css'

export default function Categorias({categoria}) {
    const history = useHistory();

    const handleClick = () => {
        history.push(`/adm/categoria/${categoria.id}`);
    };
    return (
        <div>
            <div onClick={handleClick}>
                    <div className="categoria">
                        <p>{categoria.nome}</p> 
                    </div>
                </div>
        </div>
    )
}