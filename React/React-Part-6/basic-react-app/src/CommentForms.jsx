import { set } from "mongoose";
import { useState } from "react";

export default function CommentForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    console.log(formData);
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };
  return (
    <div>
      <h4>Give a comment</h4>
      <form onChange={handleInputChange}>
        <label htmlFor="username">Username</label>
        <input
          onChange={handleInputChange}
          placeholder="username"
          type="text"
          value={formData.username}
          id="username"
          name="username"
        />
        <br></br>
        <br></br>
        <label htmlFor="remarks">Remarks</label>
        <textarea
          onChange={handleInputChange}
          value={formData.remarks}
          placeholder="Add few remarks"
          id="remarks"
          name="remarks"
        ></textarea>
        <br></br>
        <br></br>
        <label htmlFor="rating">Rating</label>
        <input
          onChange={handleInputChange}
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          id="rating"
          name="rating"
          value={formData.rating}
        />
        <br></br>
        <br></br>
        <button onClick={handleSubmit}>Add comment</button>
      </form>
    </div>
  );
}
