import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import {createUserWithEmailAndPassword , signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoginForm, setisLoginForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setisLoginForm(!isLoginForm);
  };

  const handleSubmit = () => {
    if (!isLoginForm && !name.current.value.trim()) {
      seterrorMessage("Name is required");
      return;
    }
    const message = validateData(email.current.value, password.current.value);

    seterrorMessage(message);

    if (message) return;

    if (!isLoginForm) {
      //signup logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value )
       .then((userCredential) => { 
        // Signed up 
        const user = userCredential.user;
         console.log(user)  }) 
        .catch((error) => { const errorCode = error.code; 
          const errorMessage = error.message; 
          seterrorMessage(errorCode +"-"+errorMessage)  });


  } else {

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrorMessage(errorCode +"-"+errorMessage)
  });

    }

    console.log("Form Submitted Successfully");
  };
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
        <form
          className="bg-black/75 text-white p-12 rounded-md w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <h1 className="text-3xl font-bold mb-8">
            {isLoginForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isLoginForm && (
            <input
              ref={name}
              type="text"
              placeholder="Name"
              className="w-full p-4 mb-4 rounded bg-gray-700 outline-none"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="w-full p-4 mb-4 rounded bg-gray-700 outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-6 rounded bg-gray-700 outline-none"
          />
          {errorMessage && (
            <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
          )}

          <button
            className="w-full bg-red-600 hover:bg-red-700 p-3 rounded font-semibold"
            onClick={handleSubmit}
          >
            {isLoginForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-gray-400 mt-6 cursor-pointer">
            {isLoginForm ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              className="text-white hover:underline"
              onClick={toggleSignInForm}
            >
              {isLoginForm ? "Sign up now" : "Sign in now"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
