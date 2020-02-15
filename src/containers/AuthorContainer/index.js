import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getAuthorDetails } from "../../services/placeholderApi";

export const AuthorContainer = () => {
  const { userId } = useParams();
  const [authorData, setAuthorData] = useState([]);
  useEffect(() => {
    getAuthorDetails(userId).then(authorData => setAuthorData(authorData));
  }, [userId]);

  return (
    <React.Fragment>
      <p>
        <Link to="/users">Back to Users</Link>
      </p>
      <h2>Author View</h2>
      <h3>{authorData.name}</h3>
      <h3>{authorData.phone}</h3>
      <h3>{authorData.email}</h3>
      <p>{authorData.username}</p>
    </React.Fragment>
  );
};
