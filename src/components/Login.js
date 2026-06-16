import { useRef, useState } from "react";
import Header from "./Header";
import { validateData } from "../utils/validateData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoginForm, setisLoginForm] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignInForm = () => {
    setisLoginForm(!isLoginForm);
  };

  const handleSubmit = async () => {
    if (!isLoginForm && !name.current.value.trim()) {
      seterrorMessage("Name is required");
      return;
    }

    const message = validateData(email.current.value, password.current.value);

    seterrorMessage(message);

    if (message) return;

    try {
      if (!isLoginForm) {
        // Sign Up
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );

        const user = userCredential.user;

        await updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://avatars.githubusercontent.com/u/122897031?v=4",
        });

        await auth.currentUser.reload();

        const currentUser = auth.currentUser;

        console.log("Name:", currentUser.displayName);
        console.log("Photo:", currentUser.photoURL);

        dispatch(
          addUser({
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            email: currentUser.email,
            photoURL: currentUser.photoURL,
          }),
        );

       
      } else {
        // Sign In
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value,
        );

        console.log("Logged In User:", userCredential.user);

        
      }
    } catch (error) {
      seterrorMessage(error.code + " - " + error.message);
    }
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
