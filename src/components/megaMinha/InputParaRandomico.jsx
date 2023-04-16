import React from "react"

export default props => {

    return (
        <div>
            <label htmlFor="passoInput">Quantidade de números da MegaSena: </label>
            <input id="passoInput" type="number" value={props.qtdDeNumeros} onChange={e => props.setQtdDeNumeros(e.target.value)} />
        </div>
    )
}