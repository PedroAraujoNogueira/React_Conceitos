import React, { Component } from "react";

import "./Contador.css"

import Display from "./Display";
import PassoForm from "./PassoForm";
import Botoes from "./Botoes";

class Contador2 extends Component {

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
        console.log("eventoo", evento)
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
                <Display numero={this.state.numero}></Display>
                <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>                    
                <Botoes setInc={this.inc} setDec={this.dec} passo={this.state.passo}></Botoes>
            </div>
        )
    }
}

export default Contador2
