import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
} 

const Signup: React.FC<Props> = (props) => {
 return(
    <div>
      Hello, This is signup page.
      Already have an account, <Link to="/login"><span className="text-blue-500">Click here</span> </Link>
    </div>
 );
};
Signup.defaultProps = {};
export default memo(Signup);