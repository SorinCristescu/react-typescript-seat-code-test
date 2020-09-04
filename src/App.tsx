import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Loader from "./components/loader";
import ErrorBoundary from "./components/errorBoundary";

const HomePage = lazy(() => import("./pages/home"));
const UserPage = lazy(() => import("./pages/user"));

const App: React.FC = () => {
  return (
    <Layout>
      <ErrorBoundary>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path="/" children={<HomePage />} />
            <Route path="/:id" children={<UserPage />} />
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </Layout>
  );
};

export default App;
