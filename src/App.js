import Navbar from "./components/layout/navbar";
import { Route, Routes } from "react-router-dom";
import { Fragment, useContext } from "react";
import SignIn from "./components/account/signin";
import SignUp from "./components/account/signup";
import ForgotPass from "./components/account/forgot_pass";
import ConfirmPass from "./components/account/confirm_pass";
import AllAppointment from "./components/appointment/patient/all_appointment";
import AllAppointmentAdmin from "./components/appointment/admin/all_appointment";
import SignContext from "./components/store/signContext";
import Slide from "./components/layout/slide";
import Detail from "./components/appointment/patient/detail";
import AddAppointment from "./components/appointment/patient/addAppointment";
import DetailAdmin from "./components/appointment/admin/detail";

const App = () => {
  const context = useContext(SignContext);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route element={<h1>Link Invalid</h1>} path="*" />

        {context.signedIn && (
          <Fragment>
            {!context.isAdmin && (
              <Fragment>
                <Route
                  element={<AllAppointment />}
                  path="/all-appointment/:page"
                />
                <Route element={<Detail />} path="/appointment-details" />
                <Route element={<AddAppointment />} path="/add-appointment" />
              </Fragment>
            )}

            {context.isAdmin && (
              <Fragment>
                <Route
                  element={<AllAppointmentAdmin />}
                  path="/all-appointment/:page"
                />
                <Route element={<DetailAdmin />} path="/appointment-details" />
              </Fragment>
            )}
          </Fragment>
        )}
        {!context.signedIn && (
          <Fragment>
            <Route element={<SignIn />} path="/" />
            <Route element={<SignUp />} path="/sign-up" />
            <Route element={<ForgotPass />} path="/forgot-password" />
            <Route element={<ConfirmPass />} path="/reset-password/:link" />
          </Fragment>
        )}
      </Routes>
      {context.result.error != null && <Slide />}
    </Fragment>
  );
};

export default App;
