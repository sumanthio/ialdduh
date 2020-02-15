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
        {/*Todo Click on anywhere on the post should take the user to postView*/}
        Posted by: <UserName userId={userId} />
      </span>
    </React.Fragment>
  );
};
