import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Grid, Button, Card, Typography, Divider } from "@material-ui/core";
import { getAuthorDetails } from "../../services/placeholderApi";
import { PostsLink } from "../../components/PostsLink";

export const AuthorContainer = () => {
  const { userId } = useParams();
  const [authorData, setAuthorData] = useState([]);
  useEffect(() => {
    getAuthorDetails(userId).then(authorData => setAuthorData(authorData));
  }, [userId]);

  return (
    <Grid
      item
      xs={11}
      sm={8}
      container
      direction="row"
      justify="center"
      alignItems="space-between"
      component={Card}
    >
      <Grid item xs={9}>
        <PostsLink />
      </Grid>
      <Grid item xs={3}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/users"
        >
          Search for users
        </Button>
      </Grid>
      <Grid item>
        <Typography variant="h4">{authorData.username}</Typography>
        <Typography variant="h6">{authorData.name}</Typography>
        <Divider />
        <Typography color="textPrimary" component="h2">
          Email: {authorData.email}
        </Typography>
        <Typography color="textPrimary" component="h3">
          Website: {authorData.website}
        </Typography>
        {authorData.company && (
          <Typography color="textPrimary" component="h4">
            Company
            <br />
            {authorData.company.name}
            <br />
            {authorData.company.catchPhrase}
            <br />
            {authorData.company.bs}
            <br />
          </Typography>
        )}
      </Grid>
      <Divider />
      <Grid item></Grid>
    </Grid>
  );
};
