import { useState } from "react";

export default function CommentForm({ addNewComment }) {
  const [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  const handleInputChange = (event) => {
    setFormData((currData) => ({
      ...currData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    addNewComment(formData); // Pass data to parent
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          id="username"
          name="username"
          onChange={handleInputChange}
        />
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formData.remarks}
          placeholder="Add a few remarks"
          id="remarks"
          name="remarks"
          onChange={handleInputChange}
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label>
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
