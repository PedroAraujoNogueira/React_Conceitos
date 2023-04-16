import React, { useState } from "react"

import InputParaRandomico from "./InputParaRandomico"
import GeradorRandomico from "./GeradorRandomico"

export default props => {
    const [numero, setNumero] = useState(7)
    const [ numerosSorteados, setNumerosSorteados ] = useState([])

    const changeQtdDeNumeros = (newQtdDeNumeros) => {
        setNumero(newQtdDeNumeros)
    }

    const changeNumerosSorteados = (numerosEscolhidos) => {
        setNumerosSorteados(numerosEscolhidos)
    }

    return (
        <div>
            <InputParaRandomico qtdDeNumeros={numero} setQtdDeNumeros={changeQtdDeNumeros}></InputParaRandomico>
            <GeradorRandomico changeNumerosSorteados={changeNumerosSorteados} numerosSorteados={numerosSorteados} qtdDeNumeros={numero}></GeradorRandomico>
        </div>
    )
}