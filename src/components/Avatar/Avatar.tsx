import { ImgHTMLAttributes } from "react";
import { FC, memo } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement>{
    online?: boolean;
    status?: boolean;
    img: string;
}

const Avatar: FC<Props> = ({online, img, className, status, ...rest}) => {
    const statusClass = online === true ? "bg-green-500" : "bg-gray-400";
 return(
   <button className={"relative " + className}>
       <img {...rest}
       src = {img}
       alt = "dp"
       className = "object-cover w-16 h-16 border-2 border-white rounded-full " />
       {status && ( <div className={"absolute bottom-0 w-4 h-4 border-2 border-white rounded-full right2 " + statusClass} ></div>)}
   </button>
 );
};
Avatar.defaultProps = {
  
}
export default memo(Avatar);