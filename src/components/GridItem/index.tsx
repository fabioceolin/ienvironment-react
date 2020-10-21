import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid, { GridProps } from "@material-ui/core/Grid";

const styles = {
  grid: {
    padding: "20px !important",
  },
};

const useStyles = makeStyles(styles);

const GridItem: React.FC<GridProps> = ({ children, ...rest }) => {
  const classes = useStyles();
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

export default GridItem;
