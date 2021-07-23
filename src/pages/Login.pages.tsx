import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import {FaSpinner} from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";



interface Props {
}

const Login: FC<Props> = (props) => {
   const history = useHistory();
   const {handleSubmit, handleBlur, handleChange, values, touched, isSubmitting, errors} = useFormik({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema: yup.object().shape({ 
       email: yup.string().required().email(),
       password: yup.string().required().min(8)
      }),
      onSubmit: (data, {setSubmitting}) => {
         console.log("Form submitting", data);
         setTimeout(() => {
               console.log("Form submitted successfully");
               history.push("/dashboard");
         }, 5000);
      },
   });
 

 return(
    <div className="flex flex-col ml-52 lg:ml-24 item-center">
       <div className="flex-shrink-0 pt-2">
          <h1 className="text-4xl">Log In to <Link to="" className="text-blue-600">CODEYOGI</Link></h1>
          <h3 className="mt-2">New Here? <Link to="/signup"><span className="text-blue-600 underline">Create an account</span></Link></h3>
       </div>
        <form className="flex-col mt-16" onSubmit={handleSubmit}
        >
         <div className="flex flex-row ">
         <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=" feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
        <div className="ml-2 border-b border-gray-200 focus-within:border-blue-600">
        <input 
        type="email" 
        name="email"
        autoComplete="email" 
        value={values.email}
        onChange={handleChange} 
        onBlur={handleBlur}
        required
        className="border-none outline-none border-bottom: 1px blue focus-within:border-blue-600" 
        placeholder="Username"/></div>
        </div>
        {touched.email && <div className="text-red-500">{errors.email}</div>}
        <div className="flex flex-row mt-12 ">
           <div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="blue" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
        <div className="ml-2 border-b border-gray-200 focus-within:border-blue-600">
        <input 
        type="password" 
        name="password"
        placeholder="Password" 
        autoComplete="current-password"
        required
        value={values.password} 
        onChange={handleChange} 
        onBlur={handleBlur}
        className="border-none outline-none border-bottom: 2px blue focus-within:border-blue-600"/></div>
        </div>
        {touched.password && <div className="text-red-500">{errors.password}</div>}
        <div className="flex items-center mt-8"><div><label className="mr-2 text-sm" id="headlessui-label-9">Show password</label><button type="button" className="relative inline-flex items-center h-4 transition-colors bg-gray-200 rounded-full align-centre w-9 focus:outline-none " id="headlessui-switch-10" role="switch" aria-checked="false" aria-labelledby="headlessui-label-9"><span className="inline-block w-4 h-4 transition-transform transform translate-x-0 bg-blue-600 rounded-full"></span></button></div>
        <div className="flex ml-60"> {isSubmitting && (<FaSpinner className="mt-3 animate-spin"> </FaSpinner>)} <button type="submit" 
        className="flex flex-shrink-0 px-4 py-2 ml-2 font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
        Log In</button>
        </div>
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
      <div className="mt-36"><p className="text-sm text-center w-96"> © 2020 All Rights Reserved. <span className="font-semibold text-blue-600 cursor-pointer">CODEYOGI</span> is a product of Devslane. <span className="font-semibold text-blue-600 cursor-pointer">Cookie Preferences</span>, <span className="font-semibold text-blue-600 cursor-pointer">Privacy</span>, <span className="font-semibold text-blue-600 cursor-pointer">Terms.</span></p></div>
    </div>
 );
};
Login.defaultProps = {
}
export default memo(Login);



