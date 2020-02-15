import React, { useState, useEffect } from "react";
import { getAuthorsList } from "../../services/placeholderApi";
import { AutoComplete } from "./AutoComplete";
export const AuthorsContainer = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    getAuthorsList().then(authors => {
      setAuthors(authors);
    });
  }, []);

  return (
    <React.Fragment>
      <h2>
        <AutoComplete authors={authors} />
      </h2>
    </React.Fragment>
  );
};
