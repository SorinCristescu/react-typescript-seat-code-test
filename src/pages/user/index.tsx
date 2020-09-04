import Avatar from "@material-ui/core/Avatar";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loader from "../../components/loader";
import { RootStore } from "../../redux/store";
import { getUser } from "../../redux/users/actions";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      "& > *": {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(80),
        padding: theme.spacing(5),
      },
    },
  })
);

const UserPage: React.FC = () => {
  const classes = useStyles();
  const usersState = useSelector((state: RootStore) => state.users);
  const dispatch = useDispatch();
  let { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(getUser(id));
    };
    fetchUser();
  }, [dispatch, id]);

  if (!usersState.loaded) {
    return <Loader />;
  } else {
    return (
      <Container maxWidth="sm">
        <div className={classes.root}>
          <Paper elevation={3}>
            {usersState.user ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "50px",
                }}
              >
                <Avatar src="/broken-image.jpg" />
                <Typography align="center" variant="h6" gutterBottom>
                  {usersState.user.name}
                </Typography>
                <Typography align="center" variant="body1" gutterBottom>
                  Company: {usersState.user.companyName}
                </Typography>
                <Typography align="center" variant="body1" gutterBottom>
                  Website: {usersState.user.website}
                </Typography>
                <div style={{ width: "300px", marginTop: "50px" }}>
                  <Typography align="left" variant="body2" gutterBottom>
                    Email: {usersState.user.email}
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    Address:
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    Street: {usersState.user.street}
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    Suite: {usersState.user.suite}
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    Zipcode: {usersState.user.zipcode}
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    City: {usersState.user.city}
                  </Typography>
                  <Typography align="left" variant="body2" gutterBottom>
                    Phone: {usersState.user.phone}
                  </Typography>
                </div>
              </div>
            ) : null}
          </Paper>
        </div>
      </Container>
    );
  }
};

export default UserPage;
