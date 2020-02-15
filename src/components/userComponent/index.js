import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthorDetails } from "../../services/placeholderApi";

export const UserName = ({ userId }) => {
  const [userName, setuserName] = useState("");
  useEffect(() => {
    getAuthorDetails(userId).then(({ username }) => {
      setuserName(username);
    });
  }, [userId]);

  return <Link to={`users/${userId}`}>{userName}</Link>;
};
