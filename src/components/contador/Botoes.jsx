import React from "react";

export default props => {
    return (
        <div>
            <button onClick={props.setInc}>+{props.passo}</button>
            {/* <button onClick={() => this.inc()}>+1</button> */}
            <button onClick={props.setDec}>-{props.passo}</button>
        </div>
    )
}