import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  TextField,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";

export const AutoComplete = ({ authors }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [userKey, setUserKey] = useState("");
  // todo: move the initialstate to an outer tree

  const authorNames = [
    ...authors.map(({ username, id }) => {
      return { username, id };
    })
  ];
  const onTextChanged = e => {
    const userKey = e.target.value;
    let suggestions = [];
    setUserKey(userKey);
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
      <TextField
        fullWidth
        id="outlined-basic"
        label="Search Users"
        variant="outlined"
        autoFocus={true}
        onChange={onTextChanged}
      />
      {userKey.length > 0 && (
        <Card>
          {suggestions.length > 0 && (
            <List component="nav" aria-label="main mailbox folders">
              {suggestions.map(({ id, username }) => {
                return (
                  <ListItem button component={Link} to={`/users/${id}`}>
                    <ListItemIcon>
                      <Avatar />
                    </ListItemIcon>
                    <ListItemText>{username}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          )}
          {suggestions.length === 0 && "No users"}
        </Card>
      )}
    </React.Fragment>
  );
};
