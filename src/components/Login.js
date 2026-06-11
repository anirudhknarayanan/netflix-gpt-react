import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isLoginForm , setisLoginForm] = useState(true)
    const toggleSignInForm = ()=>{
        setisLoginForm(!isLoginForm)
    }
  return (
    <div className="relative h-screen">

      <img
        className="absolute h-screen w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
        alt="background"
      />

      
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <Header />

      
      <div className="absolute inset-0 flex justify-center items-center">
        <form className="bg-black/75 text-white p-12 rounded-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8">{isLoginForm ? "Sign In" : "Sign Up"}</h1>
         {!isLoginForm &&
                  <input
            type="text"
            placeholder="Name"
            className="w-full p-4 mb-4 rounded bg-gray-700 outline-none"
          />
         }
         

          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full p-4 mb-4 rounded bg-gray-700 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded bg-gray-700 outline-none"
          />

          <button className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 mt-6 cursor-pointer">
            New to Netflix?{" "}
            <span className="text-white cursor-pointer hover:underline" onClick={toggleSignInForm}>
              {isLoginForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;