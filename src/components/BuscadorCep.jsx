import { useState } from "react";
import axios from 'axios'
import "./BuscadorCep.css"

const BuscadorCep = () => {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const BuscarCep = async () => {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
            console.log(response.data)
        } catch (error) {
            console.log('Error ao buscar o Cep', error)
            setEndereco(null)
        }
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            BuscarCep()
        }
    }

    return (
        <div className="container">
            <label className="input">
                CEP:
                <input className="result-input" type="text" value={cep} onChange={(e) => setCep(e.target.value)} onKeyDown={handleKeyDown} />
            </label>
            <button className="button" onClick={BuscarCep}>Buscar CEP</button>

            {endereco && (
                <div className="result-container">
                    <h2 className="result-title">Resultado:</h2>
                    <p className="result-item">CEP: {endereco.cep}</p>
                    <p className="result-item">DDD: {endereco.ddd}</p>
                    <p className="result-item">Cidade: {endereco.localidade}</p>
                    <p className="result-item">Bairro: {endereco.bairro}</p>
                    <p className="result-item">Estado: {endereco.uf}</p>
                </div>
            )}
        </div>

    )
}

export default BuscadorCep
