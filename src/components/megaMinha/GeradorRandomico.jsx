import React from "react"

export default props => {
    
    const gerarNumeros = (qtdNumeros) => {
        const arrayDeNumerosRandomicos = []
        for(; arrayDeNumerosRandomicos.length < qtdNumeros;){
            const numeroRandomico = Math.floor(Math.random() * 61)
            console.log("randomico", numeroRandomico)
            if(!arrayDeNumerosRandomicos.includes(numeroRandomico)){
                arrayDeNumerosRandomicos.push(numeroRandomico)
                console.log('push', arrayDeNumerosRandomicos)   
            }
        }
        props.changeNumerosSorteados(arrayDeNumerosRandomicos)
    }

    const numerosSorteados = props.numerosSorteados.map((numeroSorteado, index) => {
        return (
            <div key={index}>
                {numeroSorteado}
            </div>
        )
    })
    return (
        <div>
            <button onClick={e => gerarNumeros(props.qtdDeNumeros)}>Gerar Números Megasena</button>
            {numerosSorteados}
        </div>
    )
}