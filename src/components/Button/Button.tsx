import { ButtonHTMLAttributes, memo } from 'react';
import { FC } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'primary' | 'secondary';
    children: string;
}

const Button: FC<Props> = ({children, className, theme, ...rest}) => {
    const themeClasses = theme === "primary" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-600 hover-gray--700";
 return(
    <div>
     <button 
        {...rest}
        className= { "flex flex-shrink-0 px-4 py-2 font-bold text-white rounded " + themeClasses + " " + className } >
        {children}</button>
    </div>
 );
};
Button.defaultProps = {
    theme: 'primary'
}
export default memo(Button);