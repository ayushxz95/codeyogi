import { memo, useEffect } from "react";

interface Props {
}

const AuthHero: React.FC<Props> = (props) => {
    console.log("AUthhero Rendering");
    useEffect(() => {
        console.log("AUthhero Rendering for the first time");
    }, []);
 return(
    <div className="w-1/2 h-screen text-white bg-black">
       Logo will go here.
    </div>
 );
};
AuthHero.defaultProps = {
}
export default memo(AuthHero);