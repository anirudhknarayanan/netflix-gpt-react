import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser,removeUser } from '../utils/userSlice';


const Body = () => {
  const dispacth = useDispatch()
  
    const appRouter = createBrowserRouter([
        {
        path : "/",
        element : <Login/>
        },
        {
            path : "/browse",
            element : <Browse/>
        }
])

useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    console.log("Firebase User:", user);

    if (user) {
      const { uid, displayName, email, photoURL } = user;

      console.log("displayName:", displayName);
      console.log("photoURL:", photoURL);

      dispacth(
        addUser({
          uid,
          displayName,
          email,
          photoURL,
        })
      );
    } else {
      dispacth(removeUser());
    }
  });

  return () => unsubscribe();
}, [dispacth]);
  return <RouterProvider router={appRouter} />;
}

export default Body
