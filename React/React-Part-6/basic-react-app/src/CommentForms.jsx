import { useFormik } from "formik";

export default function CommentForm({ addNewComment }) {
  // Validation logic for the form
  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required";
    }
    return errors;
  };

  // Configure Formik
  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values, { resetForm }) => {
      // Pass form data to the parent component
      addNewComment(values);
      resetForm(); // Clear the form after submission
    },
  });

  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          id="username"
          name="username"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur} // Tracks if the input has been touched
        />
        {formik.touched.username && formik.errors.username ? (
          <div style={{ color: "red" }}>{formik.errors.username}</div>
        ) : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label>
        <textarea
          value={formik.values.remarks}
          placeholder="Add a few remarks"
          id="remarks"
          name="remarks"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
          value={formik.values.rating}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <br />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
}
