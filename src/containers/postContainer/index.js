import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Button, Card } from "@material-ui/core";

import { getPostContent } from "../../services/placeholderApi";
import { Comments } from "../../components/commentComponent";
import { UserName } from "../../components/userComponent";
export const PostContainer = () => {
  const { postId } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    getPostContent(postId).then(post => setPost(post));
  }, [postId]);
  return (
    <Grid
      item
      xs={11}
      sm={8}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Card variant="outlined">
        <Grid item>
          <Button variant="contained" color="primary" component={Link} to="/">
            Back to posts
          </Button>
        </Grid>
        <Grid item>
          <h3>{post.title}</h3>
          <UserName userId={post.userId} />
          <p>{post.body}</p>
          <Comments postId={post.id} />
        </Grid>
      </Card>
    </Grid>
  );
};
