import React from "react"

export default (props) => {
    const gerarIdade = () => parseInt(Math.random() * 20) + 50 
    return ( 
        <div>
            Filho
            <button onClick={() => props.quandoClicar("Pedro", gerarIdade(), true)}>
                Fornecer Informações
            </button>
        </div>
    )
}