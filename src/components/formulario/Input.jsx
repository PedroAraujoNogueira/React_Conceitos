import React, { useState } from "react";
import "./Input.css"

export default props => {
    const [valor, setValor] = useState("")  

    const quandoMudar = (evento) => {
        setValor(evento.target.value)    
    }

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div>
                <input value={valor} placeholder="Digite seu Input" onChange={quandoMudar}/>
                <input value={valor} readOnly /> 
                <input value={undefined} />
            </div>    
        </div>
    )
}