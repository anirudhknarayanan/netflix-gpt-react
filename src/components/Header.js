import { onAuthStateChanged, signOut } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
 console.log("Redux User:", user);
  const dispacth = useDispatch()
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        navigate("/error");
      });
  };
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
      navigate("/browse")
    } else {
      dispacth(removeUser());
      navigate("/")
    }
  });

  return () => unsubscribe();
}, [dispacth]);
  return (
    <div className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black">
      {/* Netflix Logo */}
      <img
        className="w-40"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      {user && (
        <div className="flex">
          <img
            alt="profile"
            className="w-10 h-10 rounded-md "
            src={user?.photoURL}
          />

          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
