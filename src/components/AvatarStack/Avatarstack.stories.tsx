import Avatarstack from "./Avatarstack";
import "../../index.css";

const imagesURL = [
"https://images.unsplash.com/photo-1627390912381-9b9dd2bb4709?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
"https://images.unsplash.com/photo-1627363045735-e8cca940af17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1627315298285-671128685b89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
"https://images.unsplash.com/photo-1627378856510-ded8a0f7d961?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=646&q=80",
"https://images.unsplash.com/photo-1626541439364-7d1f374239fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
]

export default  {
    title: "Avatarstack",
    component: Avatarstack,
};
export const Main: any = (args: any) => <Avatarstack{...args}></Avatarstack>
Main.args = {
  images: imagesURL,
};
