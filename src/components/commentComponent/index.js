import React, { useState, useEffect } from "react";
import { getComments } from "../../services/placeholderApi";
export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(postId).then(comments => setComments(comments));
  }, [postId]);
  return (
    <React.Fragment>
      <h4>Comments:</h4>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.body}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
