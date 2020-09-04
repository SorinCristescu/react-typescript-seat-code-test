import { TextField } from "@material-ui/core";
import { FieldAttributes, FieldProps, useField } from "formik";
import * as React from "react";
import { isMobile } from "react-device-detect";

interface Props extends FieldProps {
  placeholder: string;
}

const InputField: React.FC<FieldAttributes<{}>> = ({
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <TextField
      style={
        isMobile
          ? { width: "100%", margin: "10px" }
          : { width: "70%", margin: "10px" }
      }
      placeholder={placeholder}
      helperText={errorText}
      error={!!errorText}
      {...field}
    />
  );
};

export default InputField;
