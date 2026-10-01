import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/Jobdetails";
import CandidateDashboard from "./pages/CandidateDashboard";
import MyApplications from "./pages/MyApplications";
import CandidateProfile from "./pages/CandidateProfile";
import RecruiterDashboard from "./pages/RecruiterDashBoard";
import CreateJob from "./pages/CreateJob";
import ManageJobs from "./pages/ManageJobs";
import Applicants from "./pages/Applicants";
import EditJob from "./pages/EditJobs";
import RecruiterProfile from "./pages/RecruiterProfile";
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Register />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/job",
    element: <JobDetails/>,
  },
  {
    path: "/candiate",
    element: <CandidateDashboard/>,
  },
  {
    path: "/myapplication",
    element: <MyApplications/>,
  },
  {
    path: "/profile",
    element: <CandidateProfile/>,
  },
  {
    path: "/recruiter",
    element: <RecruiterDashboard/>,
  },
  {
    path: "/createjob",
    element: <CreateJob/>,
  },
  {
    path: "/managejob",
    element: <ManageJobs/>,
  },
  {
    path: "/applicants",
    element: <Applicants/>,
  },
  {
    path: "/editjob",
    element: <EditJob/>,
  },
  {
    path: "/recruiterprofile",
    element: <RecruiterProfile/>,
  },
  {
    path: "/notfound",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;