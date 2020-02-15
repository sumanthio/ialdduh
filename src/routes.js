import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { PostsContainer } from "./containers/postsContainer";
import { PostContainer } from "./containers/postContainer";
import { AuthorContainer } from "./containers/AuthorContainer";
const Routes = () => (
  <Switch>
    <Route exact path="/" component={PostsContainer}></Route>
    <Route exact path="/posts/:postId" component={PostContainer}></Route>
    <Route exact path="/user/:id" component={AuthorContainer}></Route>
  </Switch>
);

export default Routes;
