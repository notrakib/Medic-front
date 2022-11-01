import { Fragment, useContext, useRef, useState } from "react";
import {
  AdminAppointmentById,
  AdminAppointmentByName,
  AdminAppointmentByStatus,
  AdminAppointmentByTime,
} from "../../../api/appointment";
import SignContext from "../../store/signContext";
import classes from "./style/filter.module.css";

const Filter = (props) => {
  const context = useContext(SignContext);
  const [activeName, setName] = useState(false);
  const [activeId, setId] = useState(false);
  const [activeStatus, setStatus] = useState(false);
  const [activeTime, setTime] = useState(false);
  const stTimeRef = useRef();
  const enTimeRef = useRef();
  const statusRef = useRef();
  const idRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();

  const NameHandaler = () => {
    AdminAppointmentByName(fnameRef.current.value, lnameRef.current.value)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.AppointHandaler(res);
        }
      })
      .catch();
  };

  const IdHandaler = () => {
    AdminAppointmentById(idRef.current.value)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.AppointHandaler(res);
        }
      })
      .catch();
  };

  const TimeHandaler = () => {
    let start = stTimeRef.current.value;
    let end = enTimeRef.current.value;

    if (start === "" || end === "") {
      context.setResultMessage({
        error: true,
        message: "Please fill up the time field",
      });
      return;
    }

    const curr_date =
      +new Date() -
      +new Date().getHours() * 3600000 -
      +new Date().getMinutes() * 60000;
    const stHour = Number(start.split(":")[0]);
    const stMinute = Number(start.split(":")[1]);
    const enHour = Number(end.split(":")[0]);
    const enMinute = Number(end.split(":")[1]);

    start = curr_date + stHour * 3600000 + stMinute * 60000;
    end = curr_date + enHour * 3600000 + enMinute * 60000;

    AdminAppointmentByTime(start, end)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.AppointHandaler(res);
        }
      })
      .catch();
  };

  const StatusHandaler = () => {
    AdminAppointmentByStatus(statusRef.current.value)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          props.AppointHandaler(res);
        }
      })
      .catch();
  };

  return (
    <div className={classes.main}>
      <div>
        <p
          onClick={() => {
            setName(!activeName);
            setId(false);
            setStatus(false);
            setTime(false);
          }}
        >
          Search by name
        </p>
        {activeName && (
          <div className={classes.double}>
            <input
              className={classes.input}
              ref={fnameRef}
              placeholder="Enter first name"
            />
            <input
              className={classes.input}
              ref={lnameRef}
              placeholder="Enter last name"
            />
            <button onClick={() => NameHandaler()}>Search</button>
          </div>
        )}
      </div>
      <div>
        <p
          onClick={() => {
            setId(!activeId);
            setName(false);
            setStatus(false);
            setTime(false);
          }}
        >
          Search by id
        </p>

        {activeId && (
          <div className={classes.double}>
            <input
              className={classes.input}
              ref={idRef}
              placeholder="Enter id"
            />
            <button onClick={() => IdHandaler()}>Search</button>
          </div>
        )}
      </div>
      <div>
        <p
          onClick={() => {
            setStatus(!activeStatus);
            setName(false);
            setId(false);
            setTime(false);
          }}
        >
          Search by status
        </p>
        {activeStatus && (
          <div className={classes.double}>
            <input
              className={classes.input}
              ref={statusRef}
              placeholder="Enter status"
            />
            <button onClick={() => StatusHandaler()}>Search</button>
          </div>
        )}
      </div>
      <div>
        <p
          onClick={() => {
            setTime(!activeTime);
            setName(false);
            setId(false);
            setStatus(false);
          }}
        >
          Search by time
        </p>
        {activeTime && (
          <Fragment>
            <div className={classes.double}>
              <input
                type="time"
                className={classes.input}
                ref={stTimeRef}
                placeholder="Enter start time"
              />
              <input
                type="time"
                className={classes.input}
                ref={enTimeRef}
                placeholder="Enter end time"
              />
            </div>
            <button onClick={() => TimeHandaler()}>Search</button>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default Filter;
