// import * as React from "react";
import { NavLink } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const AppBar = ({ pages }) => {
  // const [anchorElNav, setAnchorElNav] = React.useState(null);
  // const navigate = useNavigate();
  const { user, logout } = useAuth();

  // const handleOpenNavMenu = (event) => {
  //   setAnchorElNav(event.currentTarget);
  // };

  // const handleCloseNavMenu = (path) => {
  //   setAnchorElNav(null);
  //   if (path) {
  //     navigate(path);
  //   }
  // };

  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages?.map((page) => (
              // <li>
              <li className="nav-item" key={page.label}>
                <NavLink
                  className="nav-link"
                  to={page.path}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  {page.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              {!!user && (
                <NavLink className="nav-link" onClick={logout}>
                  {"logout"}
                </NavLink>
              )}
            </li>
            <li className="nav-item">
              {!!user && user.role === "staff" && (
                <NavLink className="nav-link" to="film">
                  {"Add Film"}
                </NavLink>
              )}
            </li>
          </ul>
          {!!user && (
            <div className="d-flex">
              {!!user && user.role === "staff" && "Staff "}
              User: {user.username}
            </div>
          )}
        </div>
      </div>
    </nav>
    // <nav>
    //   {pages?.map((page) => (
    //     <a key={page.label} href={page.path}>
    //       {page.label}
    //     </a>
    //   ))}
    //   {!!user && <a onClick={logout}> {"logout"}</a>}
    // </nav>
  );
};
