import React from "react";
import { Link } from "react-router-dom";
import { UserName } from "../userComponent";
import { Typography, Card, CardActions, CardContent } from "@material-ui/core";

export const Post = ({ id, title, userId }) => {
  return (
    <Card variant="outlined">
      <CardContent component={Link} to={`/posts/${id}`}>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <UserName userId={userId} />
      </CardActions>
    </Card>
  );
};
