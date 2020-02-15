import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostContent } from "../../services/placeholderApi";
import { Comments } from "../../components/commentComponent";
export const PostContainer = () => {
  const [post, setPost] = useState([]);

  const { postId } = useParams();
  useEffect(() => {
    getPostContent(postId).then(post => setPost(post));
  }, [postId]);
  return (
    <React.Fragment>
      <Link to="/">Back to posts</Link>
      <h3>{post.title}</h3>
      <span> Posted by: {post.userId}</span>
      <p>{post.title}</p>
      <Comments postId={post.id} />
    </React.Fragment>
  );
};
