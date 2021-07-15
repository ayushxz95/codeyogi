import { memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Recording: React.FC<Props> = (props) => {
 return(
    <div>
      Hello, this is recording page.
      <Link to="/dashboard"><span className="text-blue-500">Go to dashboard</span> </Link>
    </div>
 );
};
Recording.defaultProps = {
}
export default memo(Recording);