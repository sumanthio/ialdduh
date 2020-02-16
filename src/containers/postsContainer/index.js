import React, { useState, useEffect } from "react";
import { Post } from "../../components/PostComponent";
import { getPosts } from "../../services/placeholderApi";
import { Grid } from "@material-ui/core";

export const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(res => setPosts(res));
  }, []);
  return (
    <React.Fragment>
      {posts.map(({ id, title, userId }) => (
        <Grid item xs={11} sm={8} key={id}>
          <Post id={id} title={title} userId={userId}></Post>
        </Grid>
      ))}
    </React.Fragment>
  );
};
