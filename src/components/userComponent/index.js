import React, { useState, useEffect } from "./node_modules/react";
import { Link } from "./node_modules/react-router-dom";
import { getAuthorDetails } from "../../services/placeholderApi";

export const UserName = ({ userId }) => {
  const [userName, setuserName] = useState("");
  useEffect(() => {
    getAuthorDetails(userId).then(({ username }) => {
      setuserName(username);
    });
  }, [userId]);

  return (
    <div>
      Posted by: &nbsp;<Link to={`/users/${userId}`}>{userName}</Link>
    </div>
  );
};
