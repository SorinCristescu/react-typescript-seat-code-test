import CircularProgress from "@material-ui/core/CircularProgress";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      height: "80vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      "& > * + *": {
        marginLeft: theme.spacing(2),
      },
    },
  })
);

const Loader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress />
    </div>
  );
};
export default Loader;
