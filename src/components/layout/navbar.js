import { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import SignContext from "../store/signContext";
import logo from "./style/medic.png";
import classes from "./style/navbar.module.css";

const Navbar = () => {
  const context = useContext(SignContext);

  return (
    <div className={classes.main}>
      <div className={classes.logo}>
        <img src={logo} alt="Logo" />
        <p>Medic</p>
      </div>

      <div className={classes.link}>
        {context.signedIn && (
          <Fragment>
            <NavLink to="/all-appointment/0">Appointment</NavLink>
            <NavLink to="/" onClick={() => context.sign_out()}>
              Logout
            </NavLink>
          </Fragment>
        )}

        {!context.signedIn && <NavLink to="/">Sign in</NavLink>}
      </div>
    </div>
  );
};

export default Navbar;
