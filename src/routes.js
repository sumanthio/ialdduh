import React from "react";
import { Route, Switch } from "react-router-dom";
import { PostsContainer } from "./containers/postsContainer";
import { PostContainer } from "./containers/postContainer";
import { AuthorContainer } from "./containers/AuthorContainer";
import { AuthorsContainer } from "./containers/AuthorsContainer";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsContainer}></Route>
    <Route exact path="/posts/:postId" component={PostContainer}></Route>
    <Route exact path="/users" component={AuthorsContainer}></Route>
    <Route exact path="/users/:userId" component={AuthorContainer}></Route>
  </Switch>
);

export default Routes;
