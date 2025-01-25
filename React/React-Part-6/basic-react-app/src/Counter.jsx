import { useState, useEffect } from "react";

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);
  let incCountx = () => {
    setCountx((curCount) => curCount + 1);
  };
  let incCounty = () => {
    setCounty((curCount) => curCount + 1);
  };
  useEffect(
    function printSomething() {
      console.log("This is the side effect");
    },
    [countx]
  ); //what we put inside a square bracket only in that state the useeffect will work if empty only in rendering first time it will render
  return (
    <div>
      <h3>countx={countx}</h3>
      <button onClick={incCountx}>+1</button>
      <h3>county={county}</h3>
      <button onClick={incCounty}>+1</button>
    </div>
  );
}
