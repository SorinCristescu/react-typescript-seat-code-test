import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import { isMobile, isTablet } from "react-device-detect";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryButton, TextButton } from "../../components/button";
import Loader from "../../components/loader";
import TransitionsModal from "../../components/modal";
import UserForm from "../../components/userForm";
import UsersList from "../../components/usersList";
import { RootStore } from "../../redux/store";
import { deleteUser, getUsers } from "../../redux/users/actions";

const HomePage: React.FC = () => {
  const [openAddModal, setAddModal] = useState(false);

  const usersState = useSelector((state: RootStore) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      await dispatch(getUsers());
    };
    fetchUsers();
  }, []);

  const handleOpenAddModal = () => {
    setAddModal(true);
  };

  const handleCloseAddModal = () => {
    setAddModal(false);
  };

  const handlerDeleteUser = async (event: unknown, id: any) => {
    await dispatch(deleteUser(id));
    await dispatch(getUsers());
    console.log("delete user id:", id);
  };

  if (!usersState.loaded) {
    return <Loader />;
  }

  return (
    <Container>
      <div
        style={{
          margin: "20px 0px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <PrimaryButton title="ADD NEW USER" handleClick={handleOpenAddModal} />
      </div>
      <TransitionsModal
        width={isMobile || isTablet ? "80%" : "40%"}
        height="auto"
        title="Add a new user"
        description=""
        handleClose={handleCloseAddModal}
        open={openAddModal}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <UserForm create handleCloseAddModal={handleCloseAddModal} />
          <TextButton title="CLOSE" handleClick={handleCloseAddModal} />
        </div>
      </TransitionsModal>

      {!usersState.loaded ? (
        <Loader />
      ) : (
        <UsersList
          users={usersState.users}
          handlerDeleteUser={handlerDeleteUser}
        />
      )}
    </Container>
  );
};
// };

export default HomePage;
