import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AddNewAppointment } from "../../../api/appointment";
import SignContext from "../../store/signContext";
import classes from "./style/add.module.css";

const AddAppointment = () => {
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const timeRef = useRef();
  const dateRef = useRef();

  const AppointmentHandaler = () => {
    let time = timeRef.current.value;
    let date = dateRef.current.value;

    if (time === "" || date === "") {
      context.setResultMessage({
        error: true,
        message: "Please fill up the required field",
      });
      return;
    }

    const hour = Number(time.split(":")[0]);
    const minute = Number(time.split(":")[1]);

    let stTime = +new Date(date);

    stTime = stTime + hour * 3600000 + minute * 60000;
    console.log(stTime);
    AddNewAppointment({ stTime })
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Schedule saved",
          });
          navigate("/all-appointment/0");
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <h1>Add Appointment</h1>
      <p>Disease</p>
      <input type="text"></input>
      <p>Doctor Name</p>
      <input type="text"></input>
      <p>Date</p>
      <input
        min={`${new Date().getFullYear()}-${
          new Date().getMonth() + 1
        }-${new Date().getDate()}`}
        max={`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${
          new Date().getDate() + 2
        }`}
        className={classes.time}
        ref={dateRef}
        type="date"
      />
      <p>Time</p>
      <input className={classes.time} ref={timeRef} type="time" />

      <button onClick={AppointmentHandaler}>Create</button>
    </div>
  );
};

export default AddAppointment;
