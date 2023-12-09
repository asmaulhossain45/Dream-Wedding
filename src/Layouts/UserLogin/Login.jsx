/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { userLogin, userGoogleLogin, userGithubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [togglePassword, setTogglePassword] = useState(false);
  const MySwal = withReactContent(Swal);
  //   Login User With Google
  const HandleGoogleLogin = () => {
    userGoogleLogin()
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed! Try again later.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  //   Login User With Github
  const HandleGithubLogin = () => {
    userGithubLogin()
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Failed! Try again later.",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  //   Login User With Email and Password
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email) {
      setError("Please! Enter Your E-mail Address.");
      return;
    } else if (!password) {
      setError("Please! Enter Your Password.");
      return;
    }
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        e.target.reset();
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError("Invalid E-mail or Password.");
      });
    userLogin(email, password);
  };

  return (
    <div className="py-12 h-[93vh]">
      <div className="bg-orange w-3/4 mx-auto md:w-2/4 lg:w-2/4 rounded-md">
        <h1 className="text-center text-3xl font-bold bg-red rounded-t-md py-3">
          Login
        </h1>
        <form onSubmit={handleLogin} className="w-5/6 mx-auto">
          <h3 className="font-medium mt-6 mb-1">Your Email Address</h3>
          <div className="input-group">
            <input
              className="w-full px-3 isolation-auto cursor-default"
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
            />
            <span className="btn text-xl px-2 bg-red border-0 text-white cursor-default hover:bg-red">
              <TfiEmail></TfiEmail>
            </span>
          </div>
          <h3 className="font-medium mt-2 md:mt-4 mb-1">Your Password</h3>
          <div className="input-group mb-3">
            <input
              className="w-full px-3"
              type={togglePassword ? "Text" : "password"}
              name="password"
              id="password"
              placeholder="· · · · · · · · · · · · · · · · ·"
            />
            <span
              onClick={() => setTogglePassword(!togglePassword)}
              className="btn text-xl px-2 bg-red border-0 hover:bg-red text-white hover:text-black"
            >
              {!togglePassword ? (
                <FaRegEyeSlash></FaRegEyeSlash>
              ) : (
                <FaRegEye></FaRegEye>
              )}
            </span>
          </div>
          <span className="text-blue font-semibold hover:underline">
            Forget Password
          </span>
          <h1 className="text-center text-sm text-red-600 font-semibold my-2">
            {error}
          </h1>
          <input className="btn w-full mt-1 hover:bg-red border-0 hover:text-white" type="submit" value="Login" />
        </form>
        <h5 className="text-sm text-center mt-2 md:mt-4 pb-2 ">
          Don{"'"}t have an account?{" "}
          <NavLink
            className="text-blue text-lg font-bold hover:underline"
            to="/register"
          >
            Sign Up
          </NavLink>
        </h5>
        <p className="text-center text-2xl text-black border-slate border-b-2 mx-6">Or</p>
        <div className="w-5/6 mx-auto space-y-2 mt-3 pb-6">
          <button onClick={HandleGoogleLogin} className="btn w-full mt-1 hover:bg-red border-0 hover:text-white">
            <span className="text-lg md:text-2xl hover:text-white">
              <FcGoogle></FcGoogle>
            </span>
            Login With Google
          </button>
          <button onClick={HandleGithubLogin} className="btn w-full mt-1 hover:bg-red border-0 hover:text-white">
            <span className="text-lg md:text-2xl">
              <FaGithub></FaGithub>
            </span>
            Login With GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
