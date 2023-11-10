import React, { useEffect, useState } from "react";
//import {FiShoppingCart} from react-icons
import { FaShoppingCart } from "react-icons/fa";
import { BiSolidUserCircle } from "react-icons/bi";
import { RiMenu3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { SET_ACTIVE_USER,REMOVE_ACTIVE_USER } from "../redux/slice/authSlice";
import { useCart } from "react-use-cart";

const Header = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch()
  const { addItem,totalUniqueItems } = useCart();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const mail = user.email;
        var match = mail.match(/^[^@]*/);
        setUserName(user.displayName || match[0]);
        dispatch(SET_ACTIVE_USER({
          email : user.email,
          userName : user.displayName || match[0],
          userID : user.uid
        }

        ))
      } else {
        setUserName(null);
        dispatch(REMOVE_ACTIVE_USER())

      }
    });
  },[]);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout");
      })
      .catch((error) => {
        // An error happened.
        toast.error("Error");
      });
  };
  return (
    <div className="bg-slate-700 text-white">
      <div className="flex items-center justify-between mx-10 py-3">
        <div className="text-2xl ">
          <Link to={"/"}>
            <h1 className="text-white">
              shop<span className="text-red-400">Swiftly</span>
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex items-center justify-center gap-10 ">
         
          <Link to={"/"}>
            <h1 className="hover:text-red-400 cursor-pointer">Home</h1>
          </Link>
          <Link to={"/contact"}>
            <h1 className="hover:text-red-400 cursor-pointer">Contact US</h1>
          </Link>
        </div>
        <div className="hidden md:flex gap-5 ">
          {}
          {userName && (
            <Link to={"/AboutMe"} className="" >
              <h1 className="hover:text-red-400 cursor-pointer flex items-center justify-center"><BiSolidUserCircle/>Hi,{userName}</h1>
            </Link>
          )}
          {
            !userName && <Link to={"/login"}>
            <h1 className="hover:text-red-400 cursor-pointer">Login</h1>
          </Link>
          }
          {
            !userName && <Link to={"/register"}>
            <h1 className="hover:text-red-400 cursor-pointer">Register</h1>
          </Link>
          }
          
          {
            userName &&  <Link to={"/"}>
            <h1
              className="hover:text-red-400 cursor-pointer"
              onClick={handleLogout}
            >
              Log out
            </h1>
          </Link>
          }
         
          <Link to={"/orders"}>
            <h1 className="hover:text-red-400 cursor-pointer">My orders</h1>
          </Link>
          <Link to={"/cart"}>
            <h1 className="hover:text-red-400 cursor-pointer flex items-center justify-center relative">
              Cart <FaShoppingCart /> <span className={`absolute -top-3 -right-3 text-red-400 ${totalUniqueItems== 0 ? "hidden":""}`}>{totalUniqueItems}</span>{" "}
            </h1>
          </Link>
        </div>
        <div className="flex md:hidden">
          <RiMenu3Line
            size={30}
            className="cursor-pointer"
            onClick={() => {
              setMenuToggle(!menuToggle);
            }}
          />
        </div>
      </div>
      <div
        className={`${
          menuToggle ? "absolute" : "hidden"
        } bg-slate-700 h-full w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/8 md:hidden  flex flex-col gap-2 px-2 z-10`}
      >
        <Link to={"/"}>
          <h1
            className="hover:text-red-400 cursor-pointer"
            onClick={() => setMenuToggle(false)}
          >
            Home
          </h1>
        </Link>
        {userName && (
            <Link to={""} className="flex">
              <h1 className="hover:text-red-400 cursor-pointer flex items-center justify-center"><BiSolidUserCircle/>Hi,{userName}</h1>
            </Link>
          )}
        <Link to={"/contact"}>
          <h1
            className="hover:text-red-400 cursor-pointer"
            onClick={() => setMenuToggle(false)}
          >
            Contact US
          </h1>
        </Link>
        
        {
            !userName && <Link to={"/login"}>
            <h1 className="hover:text-red-400 cursor-pointer"  onClick={() => setMenuToggle(false)}>Login</h1>
          </Link>
          }
          {
            !userName && <Link to={"/register"}>
            <h1 className="hover:text-red-400 cursor-pointer"  onClick={() => setMenuToggle(false)}>Register</h1>
          </Link>
          }
        {
          userName && <Link to={"/"}>
          <h1
            className="hover:text-red-400 cursor-pointer"
            onClick={() => {handleLogout(),setMenuToggle(false)}}
          >
            Log out
          </h1>
        </Link>
        }
        
        <Link to={"/orders"}>
          <h1
            className="hover:text-red-400 cursor-pointer"
            onClick={() => setMenuToggle(false)}
          >
            My orders
          </h1>
        </Link>
        <Link to={"/cart"}>
          <h1
            className="hover:text-red-400 cursor-pointer flex items-center justify-start relative"
            onClick={() => setMenuToggle(false)}
          >
            Cart <FaShoppingCart />{" "}
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
