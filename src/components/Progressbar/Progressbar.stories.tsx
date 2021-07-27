import Progressbar from "./Progressbar";
import "../../index.css";

export default  {
    title: "Progressbar",
    component: Progressbar,
    argTypes:{
        theme: {
            control: "select",
        },
    },
};
export const Main: any = (args: any) => <Progressbar{...args}></Progressbar>
Main.args = {
   amount: 50,
   theme: "green",
};
