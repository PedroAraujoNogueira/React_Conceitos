import React, { useState } from "react"
import "./MegaCurso.css"

export default props => {
    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min
        return array.includes(aleatorio) ? gerarNumeroNaoContido(min, max, array) : aleatorio
    }
    
    function gerarNumeros(qtde){
        const numeros = Array(qtde)
            .fill(0)
            .reduce((acc) => {
                const novoNumero = gerarNumeroNaoContido(1, 60, acc)
                return [ ...acc, novoNumero]
                .sort((a, b) => a - b)
    
            }, [])
        return numeros
    }

    const [qtde, setQtde] = useState(props.qtde || 7)
    const numerosIniciais = Array(qtde).fill(0)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>
            <h3>{numeros.join(" ")}</h3>
            <div>
                <label>Quantidade de Números</label> 
                <input min="6" max="15" type="number" 
                    value={qtde} 
                    onChange={e =>  { 
                        setQtde(parseInt(e.target.value))
                        setNumeros(gerarNumeros(parseInt(e.target.value)))
                    }}
                />
            </div>
            <button onClick={_ => setNumeros(gerarNumeros(qtde))}>Gerar Números</button>
        </div>
    )
}