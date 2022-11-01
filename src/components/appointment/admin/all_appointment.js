import { Fragment, useEffect, useState } from "react";
import EachAppointment from "./each_appointment";
import classes from "./style/all_appointment.module.css";
import { AdminAppointment } from "../../../api/appointment";
import Filter from "./filter";
import { useNavigate, useParams } from "react-router-dom";

const AllAppointmentAdmin = () => {
  const [appoint, setAppoint] = useState([]);
  const [filter, setFilter] = useState(false);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    AdminAppointment(+params.page)
      .then((appoints) => {
        setAppoint(appoints);
      })
      .catch();
  }, [params.page]);

  return (
    <Fragment>
      <h3>Appointment history for all patients</h3>

      <div className={classes.main}>
        <h1>Appointment List</h1>
        <button className={classes.btn} onClick={() => setFilter(!filter)}>
          Filter
        </button>
        {filter && (
          <Filter AppointHandaler={(appoint) => setAppoint(appoint)} />
        )}
        <div className={classes.header}>
          <div>
            <p>Email</p>
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
          return <EachAppointment key={each._id} appointment={each} />;
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

export default AllAppointmentAdmin;
