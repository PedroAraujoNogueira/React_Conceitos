import React from "react";

export default (props) => {
    const { min, max } = props
    return (
        <div> 
            <p>Valor Mínimo: {min}</p>
            <p>Valor Máximo: {max}</p>
            <p>Valor Aleatório: {parseInt(Math.random() * (props.max - props.min) + props.min)}</p>
        </div>
    )
}