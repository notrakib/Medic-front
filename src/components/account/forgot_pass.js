import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ForgotPassHandaler } from "../../api/sign";
import SignContext from "../store/signContext";
import classes from "./style/signin.module.css";

const ForgotPass = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const email = useRef();

  const PasswordHandaler = () => {
    ForgotPassHandaler({
      email: email.current.value,
    })
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate(`/reset-password/${res.link}`);
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <h1>Please Enter Email</h1>
      <p>Email</p>
      <input ref={email} placeholder="Email address here"></input>

      <button onClick={PasswordHandaler}>Enter</button>
    </div>
  );
};

export default ForgotPass;
