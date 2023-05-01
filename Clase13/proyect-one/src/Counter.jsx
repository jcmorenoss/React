import { useState, useEffect } from "react"
import Button from "react-bootstrap/esm/Button"

export const Counter =()=>{

    const [count,setCount]=useState(1)

    useEffect(()=>{
        console.log("Cambio el contador");
    },[count])
    
    return(
        <>
        <Button onClick={()=>setCount(count+1)} variant="success">+</Button>
        <p>{count}</p>
        <Button onClick={()=>setCount(count-1)} variant="success">-</Button>
        </>
    )
}