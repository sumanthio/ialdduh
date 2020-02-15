import React, { useState, useEffect } from "react";

export const Post = ({ id, title, userId }) => {
  // const [post, setPost] = useState([]);
  const [userName, setUsername] = useState("");

  return (
    <React.Fragment>
      <a>
        <h3>{title}</h3>
      </a>
      <span> Posted by: {userId}</span>
    </React.Fragment>
  );
};
