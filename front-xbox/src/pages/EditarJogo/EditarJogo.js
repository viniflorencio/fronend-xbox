import React from 'react';
import { Api } from '../../api/Api';

export default function EditarJogo() {

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
            Api.update('EditarJogo', payload),
        )
    }

    const id = props.match.params.id;
    const [jogos, setJogos] = useState();

    useEffect(() => {
        const ListaJogo = async () => {
            const response = await Api.buildApiGetRequest(Api.GetAll(id),);

            const resultado = await response.json();

            setJogos(resultado);
        };

        ListaJogo();
    }, [id]);


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="inputs">
                    <div className="form-inputs">
                        <h2>Nome do jogo</h2>
                        <input type="text" name='nome' defaultValue={jogos.title}/>
                    </div>
                    <div className="form-inputs">
                        <h2>descricao</h2>
                        <input type="text" name='descricao' defaultValue={jogos.descricao}/>
                    </div>
                    <div className="form-inputs">
                        <h2>Capa</h2>
                        <input type="text" name='capa' defaultValue={jogos.capa}/>
                    </div>
                </div>
            </form>
            
        </div>
    )
}
