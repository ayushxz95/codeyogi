import  { memo } from 'react'

interface Props {
}

const Sidebar: React.FC<Props> = (props) => {
 return(
    <div className="h-screen bg-gray-500 w-80">
        This is sidebar
    </div>
 );
};
Sidebar.defaultProps = {
}
export default memo(Sidebar);