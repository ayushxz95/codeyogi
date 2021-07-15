import { FC, memo } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import DashboardPages from "./pages/Dashboard.pages";
import LoginPages from "./pages/Login.pages";
import RecordingPages from "./pages/Recording.pages";
import SignupPages from "./pages/Signup.pages";

interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/login">
            <LoginPages />
          </Route>
          <Route path="/signup">
            <SignupPages />
          </Route>
          <Route path="/recording">
            <RecordingPages />
          </Route>
          <Route path="/dashboard">
            <DashboardPages />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
};
App.defaultProps = {};

export default memo(App);
