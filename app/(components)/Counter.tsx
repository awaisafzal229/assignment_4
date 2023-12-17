"use client";
import { useState } from "react"
import Button from "./Button"


interface Datatype{
    name: string,
    id: number
}
const Counter = () => {
    const  data:Datatype[]=[{
        name:"Awais",
        id:1
    },
    {
        name:"Ali",
        id: 2
    },
    {
        name: "Huzaifa",
        id: 3
    }
]
const [name, setName] = useState(0)
function increment() {
        setName((prevName) => (prevName + 1) % data.length);
}    
function decrement() {
    setName((prevName) => (prevName - 1 + data.length) % data.length);
    
}
function reset() {
    setName(0)
}

  return (
    <div>
      <Button sign="+" onClick={increment}/>
      <h2>{data[name].id}. {data[name].name}</h2>
      <Button sign="-" onClick={decrement}/>
      <Button sign="reset" onClick={reset}/>
    </div>
  )
}

export default Counter
