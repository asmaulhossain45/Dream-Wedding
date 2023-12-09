/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { BiLink } from "react-icons/bi";
import { FaGithub, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { FcBusinessman, FcGoogle } from "react-icons/fc";
import { TfiEmail } from "react-icons/tfi";
import { NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { AuthContext } from "../../Context/AuthProvider";

const CreateAccount = () => {
  const {createUser, userGoogleLogin, userGithubLogin } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  const [togglePassword, setTogglePassword] = useState(false);
  const [error, setError] = useState(null);
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
  // ----- Create User with Email & Password -----
  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email) {
      setError("Please! Enter Your E-mail Address.");
      return;
    } else if (!password) {
      setError("Password should be at least 6 characters");
      return;
    } else if (password.length < 6) {
      setError("Password should be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setError("Use at least one Upper-Case later");
      return;
    } else if (!/[!@#$%&*+.?~=]/.test(password)) {
      setError("Use at least one special character");
      return;
    }

    createUser(email, password)
      .then((result) => {
        e.target.reset();
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Account Created Successful.",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
    createUser(email, password);
  };

  return (
    <div className="py-12 h-[95vh]">
      <div className="bg-red w-3/4 mx-auto md:w-2/4 lg:w-2/4 rounded-md">
        <h1 className="text-center text-2xl md:text-3xl font-bold bg-orange rounded-t-md py-3">
          Create Account
        </h1>
        <form onSubmit={handleRegister} className="w-5/6 mx-auto mt-5">
          <h3 className="text-white font-medium mb-1">Your Name</h3>
          <div className="input-group">
            <input
              className="w-full px-3 isolation-auto"
              type="text"
              name="name"
              id="name"
              placeholder="John Doe"
            />
            <span className="btn text-xl px-2 bg-orange hover:bg-orange border-0 text-white cursor-default">
              <FcBusinessman></FcBusinessman>
            </span>
          </div>
          <h3 className="text-white font-medium mt-2 mb-1">Photo URL</h3>
          <div className="input-group">
            <input
              className="w-full px-3 isolation-auto"
              type="text"
              name="url"
              id="url"
              placeholder="https://www.example.com/photo"
            />
            <span className="btn text-xl px-2 bg-orange hover:bg-orange border-0  text-white  cursor-default">
              <BiLink></BiLink>
            </span>
          </div>
          <h3 className="text-white font-medium mt-2 mb-1">Email Address</h3>
          <div className="input-group">
            <input
              className="w-full px-3 isolation-auto"
              type="email"
              name="email"
              id="email"
              placeholder="email@example.com"
            />
            <span className="btn text-xl px-2 bg-orange hover:bg-orange border-0 text-white cursor-default">
              <TfiEmail></TfiEmail>
            </span>
          </div>
          <h3 className="text-white font-medium mt-2 mb-1">Password</h3>
          <div className="input-group">
            <input
              className="w-full px-3"
              type={togglePassword ? "Text" : "password"}
              name="password"
              id="password"
              placeholder="· · · · · · · · · · · · · · · · ·"
            />
            <span
              onClick={() => setTogglePassword(!togglePassword)}
              className="btn text-xl px-2 bg-orange hover:bg-orange border-0 hover:text-black  text-white "
            >
              {!togglePassword ? (
                <FaRegEyeSlash></FaRegEyeSlash>
              ) : (
                <FaRegEye></FaRegEye>
              )}
            </span>
          </div>
          <h1 className="text-center text-sm text-red-600 font-semibold my-2">
            {error}
          </h1>
          <input className="btn w-full hover:bg-orange border-0 hover:text-white" type="submit" value="Create Account" />
        </form>
        <h5 className="text-sm text-center mt-2 pb-2 ">
          Already have an account?{" "}
          <NavLink
            className="text-blue font-bold text-lg hover:underline"
            to="/login"
          >
            Login
          </NavLink>
        </h5>
        <p className="text-center border-slate text-2xl border-b-2 mx-6">Or</p>
        <div className="w-5/6 mx-auto space-y-2 mt-2 pb-6">
          <button onClick={HandleGoogleLogin} className="btn w-full hover:bg-orange border-0 hover:text-white">
            <span className="text-lg md:text-2xl">
              <FcGoogle></FcGoogle>
            </span>
            Login With Google
          </button>
          <button onClick={HandleGithubLogin} className="btn w-full hover:bg-orange border-0 hover:text-white">
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

export default CreateAccount;
