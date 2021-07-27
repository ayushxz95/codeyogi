import  { memo } from 'react'
import {FcBusinessman} from 'react-icons/fc'
import { GiCrossedSwords } from 'react-icons/gi';

interface Props {
   theme?: 'primary'|'secondary';
   children: string;
}

const Alert: React.FC<Props> = ({children, theme}) => {
   const themeClasses = theme === "primary" ? "bg-green-300 hover:bg-green-400"    : "bg-red-200 hover:bg-red-300";
   const textClasses = theme === 'primary' ? "text-green-600 text-sm" : "text-red-500 text-sm";
 return(
    <button className="rounded-full">
    <div>
      <div className={"flex items-center w-full h-10 rounded-full " + themeClasses}>
         <div className={"flex flex-row items-center p-2 ml-30 " + textClasses}>{<FcBusinessman size="50"/>}{children}{<GiCrossedSwords color="black" size="30"/>}</div>
      </div>
    </div>
    </button>
 );
};
Alert.defaultProps = {
   theme: "primary",

}
export default memo(Alert);
