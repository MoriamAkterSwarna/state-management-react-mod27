import { useState, type CSSProperties } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    if(isLiked) {
        setIsLiked(false);
    } else {
        setIsLiked(true);
    }
  };

  const cardStyle: CSSProperties = {
    border: "2px solid crimson",
    margin: "10px",
    padding: "15px",
    borderRadius: "10px",
    textAlign: "center",
  };

  return (
    <div style={cardStyle}>
      <h3>Post Title</h3>
      <p>This is a short post content.</p>

      <button onClick={toggleLike}>
        {isLiked ? "❤️ Liked" : "🤍 Like"}
      </button>
    </div>
  );
}