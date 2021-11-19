import React from 'react'
import { Link } from "react-router-dom";
import "./Perfil.css";
import { useEffect, useState } from 'react'

export default function Perfil() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const titulo = e.target.titulo.value;
    const imagem = e.target.imagem.value;

    const payload = {
      titulo,
      imagem,
    };

    const PatchRequest = async (payload, id) => {
      const resposta = await api.buildApiPatchRequest(
        api.updateProfileUrl(id),
        payload,
        true
      );
    };
    
    PatchRequest(payload, id);
    props.history.push(`/AccountView/${perfil.id}`);
  };

    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        const loadProfile = async () => {
          const response = await api.buildApiGetRequest(
            api.readProfileGetById(id),
            true
          );
          const resultado = await response.json();
          setUsuario(resultado);

        };
        loadProfile();
      }, []);


    return (
        <div>
          <form className="form-perfil" onSubmit={handleSubmit}>
            <img src={perfil.imagm} alt="foto perfl" />
            <label htmlFor="title">Nome do Perfil:</label>
            <input
              type="text"
              name="title"
              defaultValue={perfil.titulo}
            />

          </form>
        </div>
    )
}
