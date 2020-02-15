import React from "react";
import { Link } from "react-router-dom";
import { UserName } from "../userComponent";

export const Post = ({ id, title, userId }) => {
  return (
    <React.Fragment>
      <Link to={`/posts/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span>
        {" "}
        Posted by: <UserName userId={userId} />
      </span>
    </React.Fragment>
  );
};
