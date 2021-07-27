import Alert from "./Alert";
import "../../index.css";
// import { HiLockClosed, HiLockOpen  } from "react-icons/hi";
// import { GiSkullCrossedBones } from "react-icons/gi";

// const icons = { HiLockClosed, HiLockOpen };

export default  {
    title: "Alert",
    component: Alert,
    argTypes: {
            theme: {
                control: {type: "select"},
            },
        // Icons: {
        //     options: Object.keys(icons),
        //     mapping: icons,
        //     control: {
        //        type: "select",
        //        labels: {
        //         HiLockClosed: "tick",
        //         HiLockOpen: "cross",
        //        },
        //     },
        // },
    },
};
export const Main: any = (args: any) => <Alert{...args}></Alert>
Main.args = {
   children: 'Warning! Lorem Ipsum is simply dummy text of the printing.',
   theme: "primary",
};
