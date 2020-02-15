import React, { useState, useEffect } from "react";

export const Posts = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    //API Call to get comments
  }, []);
  return <h2> list of comments with the author data</h2>;
};
