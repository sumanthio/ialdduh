import React, { useState, useEffect } from "react";

import { getPost } from "../../services/placeholderApi";
export const PostContainer = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getPost().then(post => setPost(post));
    getComments().then(comments => setComments(comments));
  }, []);
  return (
    <React.Fragment>
      <h3>{post.title}</h3>
      <span> Posted by: {post.userId}</span>
      <p>{post.title}</p>
      {comments.map(comment => (
        <span>{comment.name}</span>
      ))}
    </React.Fragment>
  );
};
