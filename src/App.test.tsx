import React from "react";
import App from "./App";

import Loader from "./components/loader";
import HomePage from "./pages/home";
import UserPage from "./pages/user";
import { shallow } from "enzyme";

describe("App", () => {
  it("App renders without crashing", () => {
    const appWrapper = shallow(<App />);
  });

  it("Home page renders without crashing", () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(<HomePage />);
  });

  it("User page renders without crashing", () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(<UserPage />);
  });

  it("Loader renders without crashing", () => {
    const appWrapper = shallow(<App />);
    appWrapper.find(<Loader />);
  });
});
