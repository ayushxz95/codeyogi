import Button from "./Button";
import "../../index.css";

const Xyz = {
    title: "My Button",
    component: Button,
};
const Template= (args: any) => <Button{...args}></Button>
export const main: any = Template.bind({});
main.args = {
    children: "Log in!",
    type: "submit",
    className: "",
};

export default Xyz;