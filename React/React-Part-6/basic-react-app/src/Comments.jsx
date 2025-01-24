import { useState } from "react";
import "./Comment.css";
import CommentForm from "./CommentForms";
export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "gsk",
      remarks: "great job",
      rating: 3,
    },
  ]);
  let adNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
    console.log("ass");
  };
  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
          <span>{comment.remarks}</span>
          &nbsp;
          <span>rating ={comment.rating}</span>
          &nbsp;
          <p>-{comment.username}</p>
          &nbsp;
        </div>
        ))}
        
      </div>
      <hr></hr>
      <CommentForm addNewComment={adNewComment} />
    </>
  );
}
