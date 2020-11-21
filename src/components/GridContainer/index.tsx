import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = {
  grid: {
    margin: "10px !important",
    width: "unset",
  },
};

const useStyles = makeStyles(styles);

const GridContainer: React.FC<GridProps> = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.grid} {...rest}>
      {children}
    </Grid>
  );
};

export default GridContainer;
