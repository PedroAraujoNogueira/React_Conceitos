import React from "react";

import './index.css'
import './App.css'
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import Fragmento from './components/basicos/Fragmento';
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParouImpar from "./components/condicional/ParouImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Contador2 from "./components/contador/Contador2";
import MegaSena from "./components/megaMinha/MegaSena";
import MegaCurso from "./components/megaCurso/MegaCurso";

export default () => {
    return (
        <div className="App">
            <h1>Fundamentos React</h1>
            <div className="Cards">
                <Card titulo="#14 Megasena Curso" color="#a03">
                    <MegaCurso></MegaCurso>                
                </Card>
                <Card titulo="#13 Megasena Própria" color="#777">
                    <MegaSena></MegaSena>                
                </Card>
                <Card titulo="#12 Contador" color="#17F">
                    <Contador2 numeroInicial={25} passoInicial={50}></Contador2>
                </Card>
                <Card titulo="#12 Contador" color="#0F0">
                    <Contador numeroInicial={25} passoInicial={50}></Contador>
                </Card>
                <Card titulo="#11 Componente Controlado" color="#eF0">
                    <Input></Input>
                </Card>
                <Card titulo="#10 Comunicação Indireta" color="#b0f">
                    <IndiretaPai></IndiretaPai>
                </Card>
                <Card titulo="#09 Comunicação Direta" color="#A52">
                    <DiretaPai></DiretaPai>
                </Card>
                <Card titulo="#08 Renderização condicional" color="#F02">
                    <ParouImpar numero={31} />
                    <UsuarioInfo usuario={{ nome: "Pedro" }}></UsuarioInfo>
                </Card>
                <Card titulo="#07 Desafio Repetição" color="#112233">
                    <TabelaProdutos />
                </Card>
                <Card titulo="#06 Repetição" color="#00ab7e">
                    <ListaAlunos />
                </Card>
                <Card titulo="#05 Componente com Filhos" color="#5fab7e">
                    <Familia sobrenome="Araujo Nogueira">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Raquel" />
                        <FamiliaMembro nome="Rozana" />
                    </Familia>
                </Card>
                <Card titulo="#04 Desafio Aleatório" color="#2e347e">
                    <Aleatorio max={10} min={3} />
                </Card>
                <Card titulo="#03 Fragmento" color="#f99406">
                    <Fragmento />
                </Card>
                <Card titulo="#02 Com Parâmetro" color="#9e2117">
                    {/* As propriedades são somente leitura, logo não podem ser alteradas pelo componente */}
                    <ComParametro titulo="Segundo Componente" aluno="Pedro" nota={9.3}/> 
                </Card>
                <Card titulo="#01 Primeiro" color="#396052">
                    <Primeiro></Primeiro>
                </Card>
            </div>
        </div>
    )
}