import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupForm from "./components/registration";
import SigninForm from "./components/signIn"; 
import JobsPage from "./components/jobBoard"; 
import JobApplicationForm from "./components/jobApplication";
import JobDescriptionPage from './components/jobDetails';
import CDashBoard from "./components/candidate/cDashBoard"
// import EmployersPage from "./components/EmployersPage"; // Create Employers Page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<CDashBoard />} />
       {/* <Route path="/jobs" element={<JobsPage />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/jobapplication" element = {<JobApplicationForm/>} />
      <Route path="/jobdescription" element = {<JobDescriptionPage/>} /> */}
    </Routes>
  );
};

export default App;