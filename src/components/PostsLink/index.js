import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
export const PostsLink = () => {
  return (
    <Button variant="contained" color="primary" component={Link} to="/">
      Back to posts
    </Button>
  );
};
