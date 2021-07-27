import {FC, memo} from 'react'

interface Props {
    theme?: "red"|"yellow"|"green"|"black"|"blue";
    amount: number;
}

const Progressbar: FC<Props> = ({theme, amount}) => {
  let themeClass = "";
  if(amount > 100){
      amount = 100;
  }
  if(theme === 'red'){
      themeClass = "bg-red-500";
  }
  else if(theme === 'yellow'){
      themeClass = "bg-yellow-500";
  }
  else if(theme === 'green'){
      themeClass = "bg-green-500";
  }
  else if(theme === 'black'){
      themeClass = "bg-black";
  }
  else if(theme === 'blue'){
      themeClass = "bg-blue-500";
  }
  return(
    <div className="mx-4">
        <div className="w-full h-4 rounded-full bg:gray-300">
            <div className={"h-full rounded-full " + themeClass} style={{width: `${amount}%`}}>
            </div>
        </div>
    </div>
 );
};
Progressbar.defaultProps = {
    theme: "green",
}
export default memo(Progressbar);