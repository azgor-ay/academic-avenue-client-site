import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="navbar fixed bg-base-100 bg-opacity-20 font-semibold z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Logo></Logo>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="colleges"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Colleges
            </NavLink>
          </li>
          <li>
            <NavLink
              to="admission"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Admission
            </NavLink>
          </li>
          <li>
            <NavLink
              to="selected_classes"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              My Selected Colleges
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?user.photoURL:"https://i.ibb.co/fdwyBxN/User.png"} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <Link to="/profile">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">USER</span>
                </a>
              </li>
              </Link>
              <li>
                <a onClick={handleLogOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <Link to="/login">
              <button className="btn btn-primary">Login</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navigation;
