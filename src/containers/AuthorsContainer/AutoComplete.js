import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AutoComplete = ({ authors, set }) => {
  const [suggestions, setSuggestions] = useState([]);
  // todo: move the initialstate to an outer tree

  const authorNames = [
    ...authors.map(({ username, id }) => {
      return { username, id };
    })
  ];
  const onTextChanged = e => {
    const userKey = e.target.value;
    let suggestions = [];
    if (userKey.length > 0) {
      suggestions = authorNames.filter(
        ({ username }) =>
          username.toLowerCase().indexOf(userKey.toLowerCase()) > -1
      );
    }
    setSuggestions(suggestions);
  };
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="debounce me"
        onChange={onTextChanged}
      ></input>
      <ul>
        {suggestions.map(({ id, username }) => {
          return (
            <li key={id}>
              <Link to={`/users/${id}`}>{username}</Link>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};
