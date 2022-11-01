import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignUpHandaler } from "../../api/sign";
import SignContext from "../store/signContext";
import classes from "./style/signup.module.css";

const SignUp = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const pass = useRef();

  const UserSignUp = () => {
    const user = {
      fname: fname.current.value,
      lname: lname.current.value,
      email: email.current.value,
      password: pass.current.value,
    };

    SignUpHandaler(user)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate("/");
          context.setResultMessage({
            error: false,
            message: "Just signed up",
          });
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <h1>Create New Account</h1>
      <p>First name</p>
      <input ref={fname} placeholder="Write here"></input>
      <p>Last name</p>
      <input ref={lname} placeholder="Write here"></input>
      <p>Email Address</p>
      <input ref={email} placeholder="Email address here"></input>
      <p>Password</p>
      <input ref={pass} placeholder="Password here" type="password"></input>
      <NavLink to="/">
        <h6>Sign in</h6>
      </NavLink>
      <button onClick={UserSignUp}>Signup</button>
    </div>
  );
};

export default SignUp;
