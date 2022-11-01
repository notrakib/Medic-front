import global from "../global";

const FetchAppointment = async (offset) => {
  return fetch(`${global.Base_URL}/get-all-appointment/${offset}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const FetchAppointmentById = async (id) => {
  return fetch(`${global.Base_URL}/get-appointment/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AddNewAppointment = async (data) => {
  return fetch(`${global.Base_URL}/post-appointment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const DeleteAppointment = async (id) => {
  return fetch(`${global.Base_URL}/delete-appointment/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminAppointment = async (offset) => {
  return fetch(`${global.Base_URL}/list-of-appointment/${offset}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminAppointmentByName = async (fname, lname) => {
  return fetch(`${global.Base_URL}/name-filter/${fname}/${lname}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminAppointmentById = async (id) => {
  return fetch(`${global.Base_URL}/id-filter/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminAppointmentByTime = async (stTime, enTime) => {
  return fetch(`${global.Base_URL}/time-filter/${stTime}/${enTime}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminAppointmentByStatus = async (status) => {
  return fetch(`${global.Base_URL}/status-filter/${status}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

const AdminChangeSchedule = async (data, id) => {
  return fetch(`${global.Base_URL}/change-schedule/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(data),
  })
    .then((res) => {
      return res.json();
    })
    .then((returnObj) => {
      return returnObj;
    })
    .catch();
};

export {
  FetchAppointment,
  FetchAppointmentById,
  AddNewAppointment,
  DeleteAppointment,
  AdminAppointment,
  AdminAppointmentByName,
  AdminAppointmentById,
  AdminAppointmentByTime,
  AdminAppointmentByStatus,
  AdminChangeSchedule,
};
