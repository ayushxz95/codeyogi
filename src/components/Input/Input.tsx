import  { FC, InputHTMLAttributes, memo } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  touched?: boolean;
  error?: string;
};

const Input: FC<Props> = ({touched, error, className, placeholder, id, ...rest}) => {
 return(
    <div>
         <div className="flex flex-row ">
        {id && placeholder && (<label htmlFor={id}></label> )}
        <div className="ml-2 border-b border-gray-200 focus-within:border-blue-600">
        <input 
        id={id}
        {...rest}
        className={"border-none outline-none border-bottom: 1px blue focus-within:border-blue-600" + className} 
        placeholder={placeholder}/></div>
        </div>
        {touched && <div className="text-red-500">{error}</div>} 
    </div>
 );
};
Input.defaultProps = {
}
export default memo(Input);