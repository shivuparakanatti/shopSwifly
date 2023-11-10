import React, { useState } from "react";
import registerimg from "../../assets/register.png";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Loder from "../../components/Loder";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);

    if (password != cPassword) {
      toast.error("passwords are not maching");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        toast.success("Registaration succefull...");
        setLoading(false);
        setTimeout(()=>{

            navigate("/login");
        },1000)

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage);
        setLoading(false);
      });
  };

  return (
    <>
      {loading && <Loder />}
      <ToastContainer />
      <div className="waving-hand">
        <div className="grid grid-cols-1 sm:grid-cols-2 ">
          <div className="flex items-center justify-center my-12 sm:my-5">
            <div className="flex flex-col gap-2 bg-[#F1EDEE] shadow text-black p-10">
              <h1 className="flex items-center justify-start text-3xl mx-2 my-2 text-orange-600">
                Register{" "}
              </h1>
              <form
                className="flex flex-col gap-4 w-48 md:w-72 "
                onSubmit={handleRegister}
              >
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
                  type="password"
                  placeholder="Confirm Password"
                  className="border-2 border-black h-8 w-full md:w-3/4"
                  value={cPassword}
                  onChange={(e) => {
                    setCpassword(e.target.value);
                  }}
                  required
                />
                <input
                  type="submit"
                  value="Register"
                  className="bg-blue-600 w-full md:w-3/4 py-1 rounded-lg"
                />
              </form>

              <p>
                Alredy have an account?{" "}
                <Link to={"/login"} className="text-bold text-lg">
                  Login
                </Link>
              </p>
            </div>
          </div>

          <div className="hidden sm:flex">
            <img src={registerimg} className="h-full" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
