import React, { Fragment, useState } from 'react'

const C06matriz = () => {
    const[lista, setlista] = useState([1,2,3,4,5])
  return (
    <Fragment>
      <h1 style={{background:"violet"}}>Lectura sin index y sin htlm</h1>
      {lista.map((item)=> item)}
      <br/>

      <h1 style={{background:"green"}}>Lectura sin index y con html</h1>
      {lista.map((item)=> <span> {item}</span>)}
      <br/>

      <h1 style={{background:"yellow"}}>Listas con index y sin key</h1>
      {
        lista.map((item, index)=>
        <p>{item}</p>
        )
      }
      <br/>

      <h1 style={{background:"orange"}}>Listas con index y con key</h1>
      {lista.map((item, index)=>
      <p key = {index}>
        {item} - {index}
      </p>)
      }
      <br/>
    </Fragment>
  )
}

export default C06matriz
