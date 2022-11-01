import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DeleteAppointment } from "../../../api/appointment";
import DateFormat from "../../layout/dateFormat";
import TimeFormat from "../../layout/timeFormat";
import Modal from "../../modal/modal";
import SignContext from "../../store/signContext";
import deletes from "./style/delete.png";
import detail from "./style/detail.png";
import classes from "./style/each_appointment.module.css";

const EachAppointment = (props) => {
  const [showModal, setModal] = useState(false);
  const context = useContext(SignContext);
  const navigate = useNavigate();

  const DeleteHandaler = () => {
    if (props.appointment.status != "Pending") {
      context.setResultMessage({
        error: true,
        message: "Only pending request can be deleted",
      });
      setModal(false);
      return;
    }

    DeleteAppointment(props.appointment._id)
      .then((res) => {
        if (res.error) {
          context.setResultMessage({ error: true, message: res.error.message });
        } else {
          context.setResultMessage({
            error: false,
            message: "Appointment deleted",
          });
          setModal(false);
        }
      })
      .catch();
  };

  return (
    <div className={classes.row}>
      <p>{props.index}</p>
      <p>
        <DateFormat date={props.appointment.stTime} />
      </p>
      <p>
        <TimeFormat date={props.appointment.stTime} />
      </p>
      <p>{props.appointment.status}</p>

      <div className={classes.btns}>
        <button
          onClick={() =>
            navigate("/appointment-details", { state: props.appointment })
          }
        >
          <p>Details</p>
          <img src={detail} alt="" />
        </button>
        <button onClick={() => setModal(!showModal)} className={classes.dlt}>
          <p>Delete</p>
          <img src={deletes} alt="" />
        </button>
      </div>

      {showModal && (
        <Modal onDelete={DeleteHandaler} onClick={() => setModal(!showModal)} />
      )}
    </div>
  );
};

export default EachAppointment;
