import { memo } from "react";
import { Route, Switch } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPages from "./Login.pages";
import SignupPages from "./Signup.pages";

interface Props {
}

const Auth: React.FC<Props> = (props) => {
 return(
    <div className="flex flex-row justify-between">
     <Switch>
          <Route path="/login">
            <LoginPages />
          </Route>
          <Route path="/signup">
            <SignupPages />
          </Route>
     </Switch>
     <AuthHero/>
    </div>
 );
};
Auth.defaultProps = {
}
export default memo(Auth);