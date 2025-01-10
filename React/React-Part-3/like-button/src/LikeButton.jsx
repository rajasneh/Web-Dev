import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);
  let toggleLike = () => {
    setIsLiked(!isLiked);
  };
  let likeStyle = { color: "red" };
  return (
    <div>
      <p onClick={toggleLike} className="">
        {isLiked ? (
          <i className="fa-solid fa-heart logo" style={likeStyle}></i>
        ) : (
          <i className="fa-regular fa-heart logo"></i>
        )}
      </p>
    </div>
  );
}
