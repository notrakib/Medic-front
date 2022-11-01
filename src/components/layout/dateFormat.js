import { Fragment } from "react";

const DateFormat = (props) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const propsDate = props.date;
  const date = new Date(propsDate).getDate();
  const month = months[new Date(propsDate).getMonth()];
  const year = new Date(propsDate).getFullYear();
  return <Fragment>{`${date} ${month} ${year}`}</Fragment>;
};

export default DateFormat;
