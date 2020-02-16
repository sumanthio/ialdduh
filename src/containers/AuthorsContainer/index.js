import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getAuthorsList } from "../../services/placeholderApi";
import { AutoComplete } from "./AutoComplete";
import { PostsLink } from "../../components/PostsLink";
export const AuthorsContainer = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthorsList().then(authors => {
      setAuthors(authors);
    });
  }, []);

  return (
    <React.Fragment>
      <Grid item xs={11} sm={8}>
        <PostsLink />
      </Grid>
      <Grid item xs={11} sm={8}>
        <AutoComplete authors={authors} />
      </Grid>
    </React.Fragment>
  );
};
