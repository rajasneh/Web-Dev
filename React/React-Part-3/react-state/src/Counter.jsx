import { useState } from "react";

export default function Counter() {
    let [count,setCount]=useState(0);

  function inCount() {
    // setCount(count+1);
    setCount((crrCount)=>{
      return crrCount+1;
    });
    setCount((crrCount)=>{
      return crrCount+1;
    });
  }
  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Increase Count</button>
    </div>
  );
}