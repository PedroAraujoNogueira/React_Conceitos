import React, { Component } from "react";
import "./Contador.css"

class Contador extends Component {
    
    constructor(props){
        super(props)
    

        // this.inc = this.inc.bind(this) // Essa linha serve para amarrar a função inc ao contexto léxico do this, ou seja, da 
        // ao contexto léxico da classe.
        // Porém não usamos dessa forma pq podemos usar somente uma arrow function, que também mantém o contexto léxico
        // do this, ou seja, em uma arrow function o this sempre será o mesmo.
        // Ou ainda uma terceira forma de manter o contexto léxico seria passar dentro de onClick uma arrow function.
    }

    state={
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5
    }

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }

    setPasso = (evento) => {
        console.log(evento)
        let valorPassoAlterado = {
            passo: parseInt(evento.target.value)
        }
        
        if(isNaN(valorPassoAlterado.passo)){
            valorPassoAlterado = {
                passo: 0
            }
        }

        this.setState(valorPassoAlterado) 
    }

    render(){
        return (
            <div className="Contador"> 
                <h2>Contador</h2>
                <h3>{this.state.numero}</h3>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="number" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+{this.state.passo}</button>
                {/* <button onClick={() => this.inc()}>+1</button> */}
                <button onClick={this.dec}>-{this.state.passo}</button>
            </div>
        )
    }
}

export default Contador
