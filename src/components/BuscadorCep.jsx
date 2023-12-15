import { useState } from "react";
import axios from 'axios'

const BuscadorCep = () => {
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState(null)
    const BuscarCep = async () => {
        try{
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            setEndereco(response.data)
        }catch(error){
            console.log('Error ao buscar o Cep', error)
            setEndereco(null)
        }
        
        
    }
    
  return (
    <div>
        <label>
            CEP:
            <input type="text" value={cep} onChange={(e) => setCep(e.target.value)} />
        </label>
        <button onClick={BuscarCep}>Buscar CEP</button>

        {endereco && (
            <div>
                <h2>Resultado:</h2>
                <p>CEP: {endereco.cep}</p>
                <p>DDD: {endereco.ddd}</p>
                <p>Cidade: {endereco.cidade}</p>
                <p>Bairro: {endereco.localidade}</p>
                <p>Estado: {endereco.uf}</p>
            </div>
        )}
    </div>
    
  )
}

export default BuscadorCep
