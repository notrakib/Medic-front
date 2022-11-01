import { Fragment, useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SignContext from "../../store/signContext";
import EachAppointment from "./each_appointment";
import plus from "./style/plus.png";
import classes from "./style/all_appointment.module.css";
import { FetchAppointment } from "../../../api/appointment";

const AllAppointment = () => {
  const [appoint, setAppoint] = useState([]);
  const context = useContext(SignContext);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    FetchAppointment(+params.page)
      .then((appoints) => {
        setAppoint(appoints);
      })
      .catch();
  }, [params.page]);

  return (
    <Fragment>
      <h3>{`${context.user.fname} ${context.user.lname} here is your appointment history`}</h3>
      <div className={classes.main}>
        <h1>Appointment List</h1>
        <button
          onClick={() => navigate("/add-appointment")}
          className={classes.btn}
        >
          <img src={plus} alt="" />
          <p>New Appointment</p>
        </button>
        <div className={classes.header}>
          <div>
            <p>Index</p>
            <h5> </h5>
          </div>
          <div>
            <p>Date</p>
            <h5> </h5>
          </div>
          <div>
            <p>Time</p>
            <h5> </h5>
          </div>
          <div>
            <p>Status</p>
            <h5> </h5>
          </div>
          <div className={classes.action}>
            <p>Action</p>
            <h5> </h5>
          </div>
        </div>
        {appoint.map((each, index) => {
          return (
            <EachAppointment
              key={each._id}
              index={index + 1}
              appointment={each}
            />
          );
        })}
      </div>
      <div className={classes.page}>
        <button onClick={() => navigate("/all-appointment/0")}>1</button>
        <button onClick={() => navigate("/all-appointment/1")}>2</button>
        <button onClick={() => navigate("/all-appointment/2")}>3</button>
        <button onClick={() => navigate("/all-appointment/3")}>4</button>
        <button onClick={() => navigate("/all-appointment/4")}>5</button>
      </div>
    </Fragment>
  );
};

export default AllAppointment;
