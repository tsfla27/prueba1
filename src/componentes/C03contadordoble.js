import React, { Fragment, useState } from 'react'

const C03contadordoble = () => {
    const [valor,setvalor]= useState(0);
    const [numero, setnumero]= useState(0);

    const incrementodos = () =>{
        setnumero(numero+1);
        console.log("Mensaje de contador");
    }
  
    return (
    <Fragment>
      <button onClick={()=>setvalor(valor+1)}>Contador 1</button>
      <span>Incremento de Contador 1: {valor}</span>
      <hr/>
      <button onClick={incrementodos}>Contador 2</button>
      <span>Incremento en contador 2: {numero}</span>

    </Fragment>
  )
}

export default C03contadordoble



