import React, { cloneElement, Children } from "react";
// import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
    console.log("childrennnnnnn", typeof [], typeof props.children, props.children)
    return (
        <div>
            {/* Primeiras formas mostradas de como passar props do componente Familia para FamiliaMembro */}
            {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
            <FamiliaMembro nome="Raquel" {...props}/>
            <FamiliaMembro nome="Rozana" sobrenome="Araujo"/> */}

            {/* Segunda forma mostrada de como passar props do componente Familia para FamiliaMembro sendo
            que nesse caso temos um componente FamiliaMembro que está sendo passado como children do 
            componente Familia */}
            {/* {cloneElement(props.children, props)} */}

            {/*  Terceira e Quarta forma mostrada de como passar props do componente Familia para FamiliaMembro sendo
            que nesse caso temos vários componentes FamiliaMembros que estão sendo passados como children do
            componente Familia */}
            {/* Terceira */}
            {/* {Children.map(props.children, (child) => {
                return cloneElement(child, props)
            })} */}
            {/* Quarta */}
            {props.children.map((child, i) => {
                return cloneElement(child, { ...props, key: i })
            })}
        </div>
    )
}