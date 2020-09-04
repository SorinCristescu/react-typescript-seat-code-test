import * as React from "react";
import Header from "../components/header";

interface Props {
  children: React.ReactNode;
}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }}>{children}</div>
    </div>
  );
};

export default Layout;
