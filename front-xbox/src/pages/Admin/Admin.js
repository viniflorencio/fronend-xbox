import React from 'react';
import './Admin.css';
import { Link } from 'react-router-dom'

export default function Admin() {
    return (
        <div className="container-adm">
            <h2> Painel Administrador </h2>
            <Link to='/admin/addJogo'><button>Add jogo</button></Link>
            <Link to='/admin/editarJogo'><button>Editar jogo</button></Link>
            <Link to='/admin/addCategoria'><button>Add categoria</button></Link>
            <Link to='/admin/editarCategoria'><button>Editar categoria</button></Link>
        </div>
    )
}
