import { memo, useEffect } from "react";

interface Props {
}

const AuthHero: React.FC<Props> = (props) => {
    console.log("AUthhero Rendering");
    useEffect(() => {
        console.log("AUthhero Rendering for the first time");
    }, []);
 return(
    <div className="invisible w-1/2 h-screen text-white bg-black lg:visible">
       <img className="lg:p-16 xl:p-20" src="https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png " alt="logo" />
    </div>
 );
};
AuthHero.defaultProps = {
}
export default memo(AuthHero);