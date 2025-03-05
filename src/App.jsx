import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignupForm from "./components/registration";
import SigninForm from "./components/signIn"; 
import JobsPage from "./components/jobBoard"; 
import JobApplicationForm from "./components/jobApplication";
import JobDescriptionPage from './components/jobDetails';
import CDashBoard from "./components/candidate/cDashBoard"
import EmployeesDash from "./components/employer/Employeedash"
import ViewApplication from "./components/employer/viewApplication"
import CreateJobForm from './components/employer/CreateJobForm';
import ProfileDashboard from './components/profileDash';
import Admindashboard from './components/admindash/Dashboard';
import Postedjobs from './components/admindash/dash21';
import PaidFeatures from "./components/admindash/paidFeatures"

// import EmployersPage from "./components/EmployersPage"; // Create Employers Page

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/candidatedash" element = {<CDashBoard/>} />
      <Route path="/admindashboard" element = {<Admindashboard/>} />
      <Route path="/employeedash" element = {<EmployeesDash/>} />
       <Route path="/jobs" element={<JobsPage />} />
      <Route path="/signin" element={<SigninForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/jobapplication" element = {<JobApplicationForm/>} />
      <Route path="/jobdescription" element = {<JobDescriptionPage/>} />
      <Route path="/viewapplication" element = {<ViewApplication/>} />
      <Route path="/createjobform" element = {<CreateJobForm/>} />
      <Route path="/profiledashboard" element = {<ProfileDashboard />} />
      <Route path="/postedjobs" element = {<Postedjobs/>} />
      <Route path="/paidfeatures" element = {<PaidFeatures/>} />
    </Routes>
  );
};

export default App;