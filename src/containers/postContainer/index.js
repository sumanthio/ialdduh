import React, { useState, useEffect } from "./node_modules/react";
import { useParams } from "./node_modules/react-router-dom";
import { Grid, Card } from "./node_modules/@material-ui/core";

import { getPostContent } from "../../services/placeholderApi";
import { Comments } from "../../components/CommentComponent";
import { UserName } from "../../components/UserComponent";
import { PostsLink } from "../../components/PostsLink";
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
          <PostsLink />
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
