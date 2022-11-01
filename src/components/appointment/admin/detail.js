import classes from "./style/detail.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import DateFormat from "../../layout/dateFormat";
import TimeFormat from "../../layout/timeFormat";

const DetailAdmin = () => {
  const navigate = useNavigate();
  const params = useLocation();

  return (
    <div className={classes.main}>
      <h1>Appointment Details</h1>

      <div className={classes.sec2}>
        <div className={classes.user}>
          <p className={classes.title}>Patient Name</p>
          <p className={classes.info}>
            {`${params.state.userId.fname} ${params.state.userId.lname}`}
          </p>

          <p className={classes.title}>Email</p>
          <p className={classes.info}>{params.state.userId.email}</p>
        </div>

        <div className={classes.details}>
          <p className={classes.title}>Requested Status</p>
          <p className={classes.info}>{params.state.status}</p>

          <p className={classes.title}>Date & Time</p>
          <p className={classes.info}>
            <DateFormat date={params.state.stTime} />
            ( <TimeFormat date={params.state.stTime} /> )
          </p>
        </div>
      </div>

      <button onClick={() => navigate(-1)} className={classes.btn}>
        Done
      </button>
    </div>
  );
};

export default DetailAdmin;
