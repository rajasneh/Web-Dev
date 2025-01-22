import { useState } from "react";
export default function Form() {
  let [fullName, setFullName] = useState("Asneh");

  let handleChange = (event) => {
    setFullName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="userName">Full Name</label>
      <input
        placeholder="enter your name"
        type="text"
        value={fullName}
        id="userName"
        onChange={handleChange}
      ></input>
      <button>Submit</button>
    </form>
  );
}
