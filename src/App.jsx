import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupForm from "./components/registration";
import SigninForm from "./components/signIn"; 
import JobsPage from "./components/jobBoard"; 
import JobApplicationForm from "./components/jobApplication";
import JobDescriptionPage from './components/jobDetails';
// import EmployersPage from "./components/EmployersPage"; // Create Employers Page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
       <Route path="/jobs" element={<JobsPage />} />
      {/*<Route path="/employers" element={<EmployersPage />} /> */}
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/jobapplication" element = {<JobApplicationForm/>} />
      <Route path="/jobdescription" element = {<JobDescriptionPage/>} />
    </Routes>
  );
};

export default App;