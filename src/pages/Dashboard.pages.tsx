import { FC, memo } from "react";
import {FaAngleDown, FaBell, FaBlackTie, FaRegUser} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";


interface Props {
}

const Dashboard: FC<Props> = (props) => {
 return(
    <div className="flex flex-col">
       <div className="fixed flex flex-row w-full h-20 bg-gray-900">
       <FaBlackTie color="white" fontSize="5em" className="p-2"/>
       <div className="p-6 text-xl font-bold text-white"><span>CODEYOGI</span></div>
       <div className="flex ml-auto ml-md-0">
       <div className="flex p-8 ">
       <div><FiMail color="white"/></div>
       <div><FaBell color="white" className="ml-4"/></div>
       <div><FaRegUser color="white" className="ml-4"/></div>
       </div>
       </div>
       </div>
       <div className="fixed flex w-full h-10 mt-20 bg-white" >
       <div className="p-4"><GiHamburgerMenu/></div>
       <div className="p-2 text-lg text-gray"><span>Dashboard / Records</span></div>
       <div className="flex flex-row p-4 ml-auto ml-md-0">
          <button>Setting </button>
          <div className="p-1.5"><FaAngleDown color=""/></div>
       </div>
       </div>
     {/* Hello, This is Dashboard page 
     <Link to="/recordings"><span className="text-blue-500">Go to recordings</span> </Link> */}
    </div>
 );
};
Dashboard.defaultProps = {};

export default memo(Dashboard);