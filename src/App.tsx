import { FC, memo } from "react";
import { BrowserRouter, Redirect, Route } from "react-router-dom";
import AppcontainerPages from "./pages/Appcontainer.pages";
import AuthPages from "./pages/Auth.pages";
import NotFoundPages from "./pages/NotFound.pages";


interface Props {}

const App: React.FC<Props> = (props) => {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route path="/" exact>
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path={["/login","/signup"]} exact>
            <AuthPages />
          </Route>
          <Route path={["/dashboard", "/recordings", "/batch/:batchNumber/lecture/:lectureNumber"]} exact>
            <AppcontainerPages/>
          </Route>
          <Route>
            <NotFoundPages />
          </Route>
        </switch>
      </BrowserRouter>
    </div>
  );
};
App.defaultProps = {};

export default memo(App);
