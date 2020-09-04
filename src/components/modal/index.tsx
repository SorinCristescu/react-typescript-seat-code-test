import Backdrop from "@material-ui/core/Backdrop";
import Modal from "@material-ui/core/Modal";
import Slide from "@material-ui/core/Slide";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import { UserType } from "../../redux/users/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      width: "100%",
      height: "100%",
    },
  })
);

interface Props {
  handleClose: () => void;
  open: boolean;
  width: string;
  height: string;
  title: string;
  description: string;
  children: React.ReactNode;
  user?: UserType;
}

const TransitionsModal: React.FC<Props> = (props) => {
  const {
    open,
    handleClose,
    children,
    width,
    height,
    title,
    description,
  } = props;
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Slide direction="up" in={open} mountOnEnter unmountOnExit>
        <div
          className={classes.paper}
          style={{ width: `${width}`, height: `${height}` }}
        >
          <h2 style={{ textAlign: "center" }} id="transition-modal-title">
            {title}
          </h2>
          <p style={{ textAlign: "center" }} id="transition-modal-description">
            {description}
          </p>
          {children}
        </div>
      </Slide>
    </Modal>
  );
};

export default TransitionsModal;
