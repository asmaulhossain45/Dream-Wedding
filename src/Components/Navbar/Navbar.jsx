import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, handleLogOut, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="h-screen flex justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const NavLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/Venue">Venue</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact Us</NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-between items-center bg-slate-200 px-3 md:px-8 shadow-lg">
      <div className="flex items-center">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavLinks}
          </ul>
        </div>
        <p className="font-bold text-sm md:text-2xl hidden md:flex ">
          Dream Wedding
        </p>
      </div>
      <div className=" hidden md:flex">
        <ul className="menu menu-horizontal px-1">{NavLinks}</ul>
      </div>
      <div className="flex items-center">
        <div>
          {!user ? (
            " "
          ) : (
            <div className="flex items-center mr-2">
              <h1 className="text-sm md:text-lg font-semibold mr-2">
                {user.displayName?.split(" ")[0]}
              </h1>
              <img
                className="w-8 md:w-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            </div>
          )}
        </div>
        <div>
          {user ? (
            <button
              onClick={handleLogOut}
              className="text-sm bg-red hover:bg-slate-400 hover:bg-orange p-2 rounded-sm font-medium text-white hover:text-black"
            >
              Log out
            </button>
          ) : (
            <li className="text-sm bg-red hover:bg-slate-400 hover:bg-orange p-2 rounded-sm font-medium text-white hover:text-black list-none">
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
