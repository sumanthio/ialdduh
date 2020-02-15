import React, { useState, useEffect } from "react";
import { Post } from "../../components/postComponent";
import { getPosts } from "../../services/placeholderApi";
export const PostsContainer = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts().then(res => setPosts(res));
  }, []);
  return (
    <React.Fragment>
      <h1>Hackerish News</h1>
      <pre> 1. Loader</pre>
      {posts.map(({ id, title, userId }) => (
        <Post key={id} id={id} title={title} userId={userId}></Post>
      ))}
    </React.Fragment>
  );
};
