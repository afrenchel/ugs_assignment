import React from "react";

const Post = ({ post, handleClick }) => {
  return (
    <div className="post">
      <h2>{post.title}</h2>

      <p>{post.body}</p>

      <button onClick={handleClick} type="button" className="btn-details">
        More details
      </button>
    </div>
  );
};

export default Post;
