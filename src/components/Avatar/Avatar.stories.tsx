import Avatar from "./Avatar";
import "../../index.css";

export default  {
    title: "Avatar",
    component: Avatar,
};
export const Main: any = (args: any) => <Avatar{...args}></Avatar>
Main.args = {
    img: "https://images.unsplash.com/photo-1627363045735-e8cca940af17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    online: true,
    status: true,
};
