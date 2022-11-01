import { Fragment } from "react";

const TimeFormat = (props) => {
  const propsDate = props.date;
  const hour = new Date(propsDate).getUTCHours();
  const minute = new Date(propsDate).getMinutes();

  return <Fragment>{`${hour} : ${minute}`}</Fragment>;
};

export default TimeFormat;
