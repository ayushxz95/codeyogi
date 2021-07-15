import { memo } from "react";

interface Props {
}

const NotFound: React.FC<Props> = (props) => {
 return(
    <div className="w-screen h-screen bg-green-500">
      Sorry this page not found! 
    </div>
 );
};
NotFound.defaultProps = {
}
export default memo(NotFound);