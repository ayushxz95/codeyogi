import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Recording: React.FC<Props> = (props) => {
 return(
    <div>
      Hello, this is recording page.
    </div>
 );
};
Recording.defaultProps = {
}
export default memo(Recording);