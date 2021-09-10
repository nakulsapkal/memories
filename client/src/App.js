import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Memories from "../src/images/memories.png";
import Posts from "../src/components/Posts/Posts";
import Form from "../src/components/Form/Form";
function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" />
    //     </Switch>
    //   </div>{" "}
    // </Router>

    <Container maxidth="lg">
      <AppBar position="static">
        <Typography variant="h2" align="center">
          Memories
        </Typography>
        <img src={Memories} alt="Memories" height="60" />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignitems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
