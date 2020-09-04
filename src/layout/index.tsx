import * as React from "react";
import Header from "../components/header";

export interface LayoutPropsI {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutPropsI> = ({ children }) => {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }}>{children}</div>
    </div>
  );
};

export default Layout;
