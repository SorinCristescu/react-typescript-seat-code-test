import Button from "@material-ui/core/Button";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
      },
    },
  })
);

export interface Props {
  title: string;
  disabled?: boolean;
  handleClick: (
    event?: React.MouseEvent<unknown>,
    id?: number | string,
    user?: number | string
  ) => void;
}

export const TextButton: React.FC<Props> = ({
  disabled,
  title,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button disabled={disabled} color="primary" onClick={handleClick}>
        {title}
      </Button>
    </div>
  );
};

export const PrimaryButton: React.FC<Props> = ({
  disabled,
  title,
  handleClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        type="submit"
        disabled={disabled}
        color="primary"
        variant="contained"
        onClick={handleClick}
      >
        {title}
      </Button>
    </div>
  );
};
