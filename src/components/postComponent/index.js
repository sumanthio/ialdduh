import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Post = ({ id, title, userId }) => {
  // const [post, setPost] = useState([]);
  const [userName, setUsername] = useState("");

  return (
    <React.Fragment>
      <Link to={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span> Posted by: {userId}</span>
    </React.Fragment>
  );
};
