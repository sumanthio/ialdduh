import React, { useState, useEffect } from "react";
import { Typography, Card, CardContent, CardActions } from "@material-ui/core";
import { getComments } from "../../services/placeholderApi";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(postId).then(comments => setComments(comments));
  }, [postId]);
  return (
    <React.Fragment>
      <h4>Comments:</h4>
      {comments.map(comment => (
        <Card elevation={3} key={comment.id}>
          <CardContent>
            <Typography component="h3" gutterBottom>
              {comment.name}
            </Typography>
            {comment.body}
          </CardContent>
          <CardActions>commented by {comment.email}</CardActions>
        </Card>
      ))}
    </React.Fragment>
  );
};
