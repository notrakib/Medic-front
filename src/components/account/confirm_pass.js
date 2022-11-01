import { ConfirmPassHandaler } from "../../api/sign";
import { useNavigate, useParams } from "react-router-dom";
import classes from "./style/signin.module.css";
import SignContext from "../store/signContext";
import { useContext, useRef } from "react";

const ConfirmPass = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const params = useParams();
  const pass = useRef();
  const pswdConfirm = useRef();

  const PasswordHandaler = () => {
    if (pass.current.value !== pswdConfirm.current.value) {
      context.setResultMessage({
        error: true,
        message: "Password did not match",
      });
      return;
    }

    ConfirmPassHandaler(
      {
        password: pass.current.value,
      },
      params.link
    )
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          navigate("/");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <h1>Enter New Password</h1>
      <p className={classes.label}>Password</p>
      <input ref={pass} placeholder="Enter password" type="password"></input>
      <p className={classes.label}>Confirm Password</p>
      <input
        ref={pswdConfirm}
        placeholder="Enter confirm password"
        type="password"
      ></input>

      <button onClick={PasswordHandaler}>Confirm</button>
    </div>
  );
};

export default ConfirmPass;
