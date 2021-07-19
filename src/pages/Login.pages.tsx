import { memo } from "react";
import { Link } from "react-router-dom";


interface Props {
}

const Login: React.FC<Props> = (props) => {
 return(
    <div className="flex flex-col ml-52 lg:ml-24 item-center">
       <div className="flex-shrink-0 pt-2">
          <h1 className="text-4xl">Log In to <Link to="" className="text-blue-600">CODEYOGI</Link></h1>
          <h3 className="mt-2">New Here? <Link to="/signup"><span className="text-blue-600 underline">Create an account</span></Link></h3>
       </div>
      <form className="flex-col mt-16">
         <div className="flex flex-row ">
         <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
        <div className="ml-2 border-b border-gray-200 focus-within:border-blue-600"><input type="email" autoComplete="email" className="border-none outline-none border-bottom: 1px blue focus-within:border-blue-600" placeholder="Username"/></div>
        </div>
        <div className="flex flex-row mt-12 ">
           <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
        <div className="ml-2 border-b border-gray-200 focus-within:border-blue-600"><input type="password" placeholder="Password" className="border-none outline-none border-bottom: 2px blue focus-within:border-blue-600"/></div>
        </div>
        <div className="flex mt-8 ml-60 "><button className="flex flex-shrink-0 px-4 py-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
        Log In</button>
        </div>
        <div className="flex items-center mt-4 ml-28">
        <label>
        <input type="checkbox" className="form-checkbox"/>
        <span className="ml-2">Keep me logged in </span>
        </label>
        </div>
        <div className="mt-4 ml-32">
        <Link to="" className="text-base text-blue-600 ">Forget password?</Link>
        </div>
      </form>
      <div className="flex flex-row my-44">
      <div className="terms-conditions">© 2020 All Rights Reserved. <a href="index.html">CORK</a> a product of
      Designreset. <div className="flex-wrap text-blue-600"><Link to="">Cookie Preferences</Link>, <Link to="">Privacy</Link>, and <Link to="">Terms</Link></div>.</div>
      </div>
    </div>
 );
};
Login.defaultProps = {
}
export default memo(Login);