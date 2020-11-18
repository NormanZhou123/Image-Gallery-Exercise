// Used material-ui https://material-ui.com/en/components for the 3x3 grid

import React from "react";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import ImageDisplay from "./components/ImageDisplay";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "50%",
    margin: "0px"
  }
}));

export default function App() {
  const classes = useStyles;
  return (
    <div className="App">
      <Grid container spacing={3} className={classes.grid}>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
        <Grid item xs={4}>
          <ImageDisplay />
        </Grid>
      </Grid>
    </div>
  );
}
