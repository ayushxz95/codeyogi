import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import {FaLock, FaSpinner, FaUser} from "react-icons/fa";
import * as yup from "yup";
import { useFormik } from "formik";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";



interface Props {
}

const Login: FC<Props> = (props) => {
   const history = useHistory();
   const {handleSubmit, getFieldProps, touched, isSubmitting, errors} = useFormik({
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
      <div className="flex flex-row">
       <div className="flex-col mt-16 ml-2">
       <FaUser/>
       <FaLock className="mt-12"/>
       </div>
        <form className="flex-col mt-16" onSubmit={handleSubmit}>
        <Input
         id="email"
         type="email" 
         placeholder="Username" 
         autoComplete="email"
         touched={touched.email}
         error={errors.email}
         {...getFieldProps("email")}
         required
        />   
        <div className="mt-8">  
        <Input
         id="password"
         type="password" 
         placeholder="Password" 
         autoComplete="password"
         touched={touched.password}
         error={errors.password}
         {...getFieldProps("password")}
         required
        /> 
        </div>  
        <div className="flex items-center mt-8"><div><label className="mr-2 text-sm" id="headlessui-label-9">Show password</label><button type="button" className="relative inline-flex items-center h-4 transition-colors bg-gray-200 rounded-full align-centre w-9 focus:outline-none " id="headlessui-switch-10" role="switch" aria-checked="false" aria-labelledby="headlessui-label-9"><span className="inline-block w-4 h-4 transition-transform transform translate-x-0 bg-blue-600 rounded-full"></span></button></div>
        <div className="flex ml-52"> {isSubmitting && (<FaSpinner className="mt-3 animate-spin"> </FaSpinner>)} <Button  theme="secondary">Log in!</Button>
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
      </div>
      <div className="mt-36"><p className="text-sm text-center w-96"> © 2020 All Rights Reserved. <span className="font-semibold text-blue-600 cursor-pointer">CODEYOGI</span> is a product of Devslane. <span className="font-semibold text-blue-600 cursor-pointer">Cookie Preferences</span>, <span className="font-semibold text-blue-600 cursor-pointer">Privacy</span>, <span className="font-semibold text-blue-600 cursor-pointer">Terms.</span></p></div>
    </div>
 );
};
Login.defaultProps = {
}
export default memo(Login);



