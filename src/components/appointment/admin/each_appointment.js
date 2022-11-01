import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import TimeFormat from "../../layout/timeFormat";
import DateFormat from "../../layout/dateFormat";
import edit from "./style/editW.png";
import detail from "./style/detail.png";
import classes from "./style/each_appointment.module.css";

import SignContext from "../../store/signContext";
import { AdminChangeSchedule } from "../../../api/appointment";

const EachAppointment = (props) => {
  const context = useContext(SignContext);
  const [activeInput, setInput] = useState(false);
  const statusRef = useRef();
  const timeRef = useRef();
  const dateRef = useRef();
  const navigate = useNavigate();

  const TimeHandaler = () => {
    let time = timeRef.current.value;
    let date = dateRef.current.value;
    let stTime;

    const hour = Number(time.split(":")[0]);
    const minute = Number(time.split(":")[1]);

    stTime = +new Date(date);

    stTime = stTime + hour * 3600000 + minute * 60000;

    if (time == "" || date == "") {
      stTime = null;
    }

    const status = statusRef.current.value;
    const data = { stTime, status };
    console.log(data);

    AdminChangeSchedule(data, props.appointment._id)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Updated scedule",
          });
          setInput(!activeInput);
        }
      })
      .catch();
  };

  return (
    <div className={classes.row}>
      <p>{props.appointment.userId.email}</p>
      {!activeInput && (
        <p>
          <DateFormat date={props.appointment.stTime} />
        </p>
      )}
      {activeInput && (
        <p>
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
        </p>
      )}
      {!activeInput && (
        <p>
          <TimeFormat date={props.appointment.stTime} />
        </p>
      )}
      {activeInput && (
        <p>
          <input ref={timeRef} type="time" />
        </p>
      )}
      {!activeInput && <p>{props.appointment.status}</p>}
      {activeInput && (
        <p>
          <select ref={statusRef} defaultValue={props.appointment.status}>
            <option>Pending</option>
            <option>Accepted</option>
            <option>Rejected</option>
          </select>
        </p>
      )}

      <div className={classes.btns}>
        <button
          onClick={() =>
            navigate("/appointment-details", { state: props.appointment })
          }
        >
          <p>Details</p>
          <img src={detail} alt="" />
        </button>
        {!activeInput && (
          <button
            onClick={() => setInput(!activeInput)}
            className={classes.dlt}
          >
            <p>Edit</p>
            <img src={edit} alt="" />
          </button>
        )}
        {activeInput && (
          <button onClick={TimeHandaler} className={classes.dlt}>
            <p>Done</p>
            <img src={edit} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default EachAppointment;
