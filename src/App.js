import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppBar, Toolbar, Typography, Grid, Box } from "@material-ui/core";
import Routes from "./routes";
export const App = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Hackerish News <pre> 1. Loader</pre>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box p={1.5}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Router>
            <Routes />
          </Router>
        </Grid>
      </Box>
    </React.Fragment>
  );
};
