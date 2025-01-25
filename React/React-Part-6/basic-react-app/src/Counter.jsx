import { useState , useEffect} from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    let incCount=()=>{
        setCount((curCount)=>curCount+1);
   }
   useEffect(function printSomething(){
    console.log("This is the side effect");
   })
   return (
    <div>
        <h3>count={count}</h3>
        <button onClick={incCount}>+1</button>
    </div>
   )
}