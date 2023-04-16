export default props => {
    
    const elseChild = props.children.filter(child => {
        // console.log("elseChild", child)
        return child.type && child.type.name === "Else"
    })

    const ifChild = props.children.filter(child => {    
        return !(child.type && child.type.name === "Else")
    })
    
    // console.log("ifChild", ifChild)

    if(props.test){
        return ifChild
    }
    else if (elseChild){
        return elseChild
    }
    else {
        return false
    }
}

export const Else = props => {
    return props.children
} 