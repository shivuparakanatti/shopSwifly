import React, { useState } from "react";
import loginimg from "../../assets/login.png";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useSelector } from "react-redux";

import Loder from "../../components/Loder";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

  

  const handleSubmit =(e)=>{
    e.preventDefault()
    setLoading(true)

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      toast.success('Login succesfull')
      setLoading(false)
      setTimeout(()=>{

        navigate("/");
    },1000)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorMessage)
      setLoading(false)
    });

  }

  const signInWithGoogle=()=>{
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    toast.success('succesull')
    navigate('/')
 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    toast.error(errorMessage)
    // ...
  });
  }

 
  return (
    <>
    {
loading ? <Loder/> : ""
    }
   
    <div className="waving-hand">
      <div className="grid grid-cols-1 sm:grid-cols-2 ">
        <div className="hidden sm:flex">
          <img src={loginimg} className="h-full" />
        </div>
        <div className="flex items-center justify-center my-12 sm:my-5">
          <div className="flex flex-col gap-2 bg-[#F1EDEE] shadow text-black p-10">
            <h1 className="flex items-center justify-start text-3xl mx-2 my-2 text-orange-600">
              Login{" "}
            </h1>
            <form className="flex flex-col gap-4 w-48 md:w-72 " onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Email"
                className="border-2 border-black h-8 w-full md:w-3/4"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border-2 border-black h-8 w-full md:w-3/4"
                value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                required
              />
              <input
                type="submit"
                className="bg-blue-600 w-full md:w-3/4 py-1 rounded-lg"
              />
            </form>
            <Link to={"/reset"}>
              <h1>Forgot Password</h1>
            </Link>
            <p className="flex items-center justify-center">--or--</p>
            <button className="bg-orange-600 py-1 rounded-md" onClick={signInWithGoogle}>
              Login with Google
            </button>
            <p>
              Don't have an account?{" "}
              <Link to={"/register"} className="text-bold text-lg">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
