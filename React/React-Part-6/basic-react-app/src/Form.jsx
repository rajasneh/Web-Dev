import { useState } from "react";
export default function Form() {
  // let [fullName, setFullName] = useState("Asneh");

  // let handleChange = (event) => {
  //   setFullName(event.target.value);
  // };

  //Handling Multiple Inputs
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });

  let handleChange = (event) => {
    //common handler for all input field
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefalut();
    setFormData({
      fullName: "",
      username: "",
    });
  };

  return (
    <form>
      <label htmlFor="fullName">Full Name</label>
      <input
        placeholder="enter your name"
        type="text"
        value={formData.fullName}
        id="fullName"
        name="fullName"
        onChange={handleChange}
      ></input>
      <br></br>
      <br></br>
      <label htmlFor="username">Username</label>
      <input
        placeholder="enter your username"
        type="text"
        value={formData.username}
        id="username"
        name="username"
        onChange={handleChange}
      ></input>
      <button>Submit</button>
    </form>
  );
}
