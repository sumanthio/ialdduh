import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostContent, getComments } from "../../services/placeholderApi";

export const PostContainer = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const { postId } = useParams();
  useEffect(() => {
    getPostContent(postId).then(post => setPost(post));
    getComments(postId).then(comments => setComments(comments));
  }, []);
  return (
    <React.Fragment>
      <h3>{post.title}</h3>
      <span> Posted by: {post.userId}</span>
      <p>{post.title}</p>
      <h4>Comments:</h4>
      {comments.map(comment => (
        <span>{comment.name}</span>
      ))}
    </React.Fragment>
  );
};
