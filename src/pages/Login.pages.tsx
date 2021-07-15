import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Login: React.FC<Props> = (props) => {
 return(
    <div>
      Hello, this is login page 
      Don't have an accound <Link to="/signup"><span className="text-blue-500">Click here</span> </Link>
      <Link to="/Dashboard"><span className="text-blue-500">Go to Dashboard</span> </Link>
    </div>
 );
};
Login.defaultProps = {
}
export default memo(Login);