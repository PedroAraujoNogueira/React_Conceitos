import React from "react";
import If, { Else } from "./If";

export default props => {
    const usuario = props.usuario || {}
    return (
        <div>
            <If test={usuario.nome}>
                Bem vindooo <strong>{usuario.nome}</strong>!
            </If>
            <If test={!usuario.nome}>
                Bem vindo <strong>Amigãooo</strong>!
            </If>

            <div> -------------------------- </div>

            <If test={usuario.nome}>
                Bem vindo <strong>{usuario.nome}</strong>!
                <Else>
                    Bem vindo <strong>Amigão</strong>!
                </Else>
                <Else>
                    Bem vindo <strong>Amigão2</strong>!
                </Else>
            </If>
        </div>
    )
}