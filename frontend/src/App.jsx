import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "./App.css";
import AdminDoctor from "./components/Admin/AdminDoctor";
import AdminPatient from "./components/Admin/AdminPatient";
import AdminQuery from "./components/Admin/AdminQuery";
import AboutUs from "./components/Patient/AboutUs";
import Appointment from "./components/Patient/Appointment";
import ContactUs from "./components/Patient/ContactUs";
import DoctorAppointmen from "./components/Profile/doctor/DoctorAppointmen";
import DoctorReview from "./components/Profile/doctor/DoctorReview";
import UserAppointment from "./components/Profile/user/UserAppointment";
import UserBookAppointment from "./components/Profile/user/UserBookAppointment";
import UserMedication from "./components/Profile/user/UserMedication";
import UserProfilePage from "./components/Profile/user/UserProfile.jsx";
import AdminDashPage from "./page/AdminDashPage";
import DoctorAuthPage from "./page/DoctorAuthPage";
import DoctorProfilePage from "./page/DoctorProfilePage";
import HomePage from "./page/HomePage";
import SignInPage from "./page/SignInPage";
import SignUpPage from "./page/SignUpPage";
import { persistor, store } from "./redux/store.js";

import PrivateRoute from "./components/Routes/PrivateRoute.jsx";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AdminNewsletter from "./components/Admin/AdminNewsletter";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/sign-in" element={<SignInPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/doctor-sign-in" element={<DoctorAuthPage />} />

            <Route element={<PrivateRoute />}>
             
              <Route path="/doctor-profile" element={<DoctorProfilePage />} />
              <Route path="/doctor-review" element={<DoctorReview />} />
              <Route
                path="/doctor-appointments"
                element={<DoctorAppointmen />}
              />

              <Route path="/user-profile" element={<UserProfilePage />} />
              <Route path="/user-appointments" element={<UserAppointment />} />
              <Route
                path="/user-book-appointment"
                element={<UserBookAppointment />}
              />
              <Route path="/user-medication" element={<UserMedication />} />

              <Route path="/admin-dashboard" element={<AdminDashPage />} />
              <Route path="/admin-doctor" element={<AdminDoctor />} />
              <Route path="/admin-patient" element={<AdminPatient />} />
              <Route path="/admin-query" element={<AdminQuery />} />
              <Route path="/admin-newsletter" element={<AdminNewsletter />} />
            </Route>
          </Routes>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
