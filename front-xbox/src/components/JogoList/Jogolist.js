
import { Jogo } from '../Jogo/Jogo'
import React, { useEffect, useState } from 'react'

export default function Jogolist() {

    const [jogos, setJogos] = useState([]);



    useEffect(() => {
        const loadGameList = async () => {
            const response = await Api.buildApiGetRequest(Api.getAll(),true);

            const resultado = await response.json();
            setJogos(resultado);
        };

        loadGameList();
    }, []);

    return (
        <div className="jogo-list">
            <div className="jogo-list-list">
            {jogos.map((jogo, index) => (
                <Jogo
                key={index}
                jogo={jogo}
                ></Jogo>
            ))}

            </div>
            
        </div>
    )
}
