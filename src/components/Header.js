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
 

    if (user) {
      const { uid, displayName, email, photoURL } = user;

      

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
  <header className="absolute top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-gradient-to-b from-black to-transparent">
    {/* Netflix Logo */}
    <img
      className="w-36 md:w-44"
      src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix Logo"
    />

    {user && (
      <div className="flex items-center gap-4">
        <span className="text-white hidden md:block">
          {user.displayName}
        </span>

        <img
          alt="profile"
          className="w-10 h-10 rounded-md"
          src={
            user.photoURL ||
            "https://occ-0-8407-3646.1.nflxso.net/dnm/api/v6/hZ0gqf3c4S5fK9h6f7cGQjJ6gM8/AAAABQ.png"
          }
        />

        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-medium"
        >
          Logout
        </button>
      </div>
    )}
  </header>
);
};

export default Header;
