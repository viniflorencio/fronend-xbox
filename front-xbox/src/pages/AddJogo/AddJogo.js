import React from 'react';
import { Api } from '../../api/Api';
import './AddJogo.css'

export default function AddJogo() {

    const handleSubmit =  async event => {
        event.preventDefault();

        const title = event.target.title.value;
        const capa = event.target.capa.value;
        const descricao = event.target.descricao.value;
        const nota = event.target.nota.value;
        const ano = event.target.ano.value;
        

        const payload = {
            title,
            capa,
            descricao,
            nota,
            ano,


        };
        const response = await Api.buildApiPostRequest(
            Api.Post('AddJogo', payload),
        )

        if (response.status === 201) {
            alert("Jogo criado")
            
        } else {
            alert("algo deu errado, tente novamente")
        }

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className='form-inputs'>
                        <h2>Nome</h2>
                        <input type="text" name='nome' />
                    </div>
                    <div className='form-inputs'>
                        <h2>Descrição</h2>
                        <input type="text" name='descricao'/>
                    </div>
                    <div className='form-inputs'>
                        <h2>Capa</h2>
                        <input type="text" name='capa'/>
                    </div>

                    <div className='form-inputs'>
                        <h2>Ano</h2>
                        <input type="text" name='ano'/>
                    </div>

                    <div className='button-form'>
                    <button type="submit">Adicionar</button>
                </div>

                </div>
            </form>
            
        </div>
    )
}
