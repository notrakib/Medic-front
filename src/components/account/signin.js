import { useContext, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SignInHandaler } from "../../api/sign";
import SignContext from "../store/signContext";
import classes from "./style/signin.module.css";

const SignIn = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const email = useRef();
  const pass = useRef();

  const UserSignIn = () => {
    const user = {
      email: email.current.value,
      password: pass.current.value,
    };

    SignInHandaler(user)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Sign-in Successful",
          });
          context.sign_in(res.userInfo, res.token);
          navigate("/all-appointment/0");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <h1>Please Sign In</h1>
      <p>Email Address</p>
      <input ref={email} placeholder="Email address here"></input>
      <p>Password</p>
      <input ref={pass} placeholder="Password here" type="password"></input>
      <NavLink to="/forgot-password">
        <h6>Forgot password</h6>
      </NavLink>
      <NavLink to="/sign-up">
        <h6>Sign up</h6>
      </NavLink>
      <button onClick={UserSignIn}>Signin</button>
    </div>
  );
};

export default SignIn;
