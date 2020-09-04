import { Formik } from "formik";
import * as React from "react";
import { useDispatch } from "react-redux";
import { generate } from "shortid";
import * as yup from "yup";
import { createUser, getUsers, updateUser } from "../../redux/users/actions";
import { UserType } from "../../redux/users/types";
import { PrimaryButton } from "../button";
import InputField from "../input";

interface NewUser {
  id: string;
  name: string;
  email: string;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  phone: string;
  website: string;
  companyName: string;
}

const validationSchema = yup.object({
  name: yup
    .string()
    .required("Name is a required field")
    .max(15, "Name can have a maximum of 15 characters"),
  email: yup
    .string()
    .required("Email is a required field")
    .email("Please type a valid email - example@gmail.com "),
  phone: yup
    .string()
    .required("Phone is a required field")
    .matches(/^\d+$/, "Please type a valid phone number"),
  website: yup
    .string()
    .required("Website is a required field")
    .matches(
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      "Please type a valid url - http(https)://www.example.com "
    ),
  companyName: yup.string().required("Email is a required field"),
  street: yup.string().required("Street is a required field"),
  city: yup.string().required("City is a required field"),
  zipcode: yup.string().required("Zipcode is a required field"),
  suite: yup.string().required("Suite is a required field"),
});

interface Props {
  handleCloseAddModal?: any;
  handleCloseUpdateModal?: any;
  create?: boolean;
  user?: any;
}

const UserForm: React.FC<Props> = (props) => {
  const { user, create, handleCloseAddModal, handleCloseUpdateModal } = props;
  const dispatch = useDispatch();
  const initialValues: UserType = {
    id: create ? generate() : user.id,
    name: create ? "" : user.name,
    email: create ? "" : user.email,
    street: create ? "" : user.street,
    suite: create ? "" : user.suite,
    city: create ? "" : user.city,
    zipcode: create ? "" : user.zipcode,
    phone: create ? "" : user.phone,
    website: create ? "" : user.website,
    companyName: create ? "" : user.companyName,
  };

  const handlerCreateUser = async (values: UserType) => {
    await dispatch(createUser(values));
    await dispatch(getUsers());
    handleCloseAddModal();
  };

  const handlerUpdateUser = async (values: UserType) => {
    await dispatch(updateUser(user.id, values));
    await dispatch(getUsers());
    handleCloseUpdateModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        create ? handlerCreateUser(values) : handlerUpdateUser(values);
        setSubmitting(true);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        isSubmitting,
        handleSubmit,
        isValid,
        dirty,
      }) => {
        return (
          <form
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <InputField placeholder="Name" name="name" />
              <InputField placeholder="Email" name="email" />
              <InputField placeholder="Phone" name="phone" />
              <InputField placeholder="Website" name="website" />
              <InputField placeholder="Company name" name="companyName" />
              <InputField placeholder="Street" name="street" />
              <InputField placeholder="Suite" name="suite" />
              <InputField placeholder="City" name="city" />
              <InputField placeholder="Zipcode" name="zipcode" />
              <div style={{ margin: "10px" }}>
                <PrimaryButton
                  disabled={!(isValid && dirty)}
                  title={create ? "ADD USER" : "UPDATE USER"}
                  handleClick={() => handleSubmit()}
                />
              </div>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default UserForm;
