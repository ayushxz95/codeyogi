import { FC, memo } from 'react'
import Avatar from '../Avatar/Avatar';


interface Props {
    images: string[];
}

const AvatarStack: FC<Props> = ({images}) => {
    const counter = images.length > 4;
    const counterText = counter && `+${images.length-4} more`;
 return(
    <div className="flex items-center">
       {images.slice(0,4).map((avatar) => (
           <div>
              <Avatar
               img={avatar}
               className="-ml-4 transition duration-200 transform ease-iin-out hover-translate-y-2"
              />
           </div>
       ))};
       {counter && (
           <div className="z-10 px-2 py-1 -ml-4 text-sm text-center text-blue-600 bg-white rounded-full fot-semibold">{counterText}
           </div>
       )}
    </div>
 )
       }
AvatarStack.defaultProps = {
    
};
export default memo(AvatarStack);