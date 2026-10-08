import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import MyApplications from "./pages/MyApplications";
import CandidateProfile from "./pages/CandidateProfile";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import CreateJob from "./pages/CreateJob";
import Applicants from "./pages/Applicants";
import RecruiterProfile from "./pages/RecruiterProfile";
import NotFound from "./pages/NotFound";
import JobsLayout from "./pages/JobsLayout";
import ProfileLayout from "./pages/ProfileLayout";
import RecruiterLayout from "./pages/RecruiterLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import RecruiterJobs from "./pages/RecruiterJobs";
import EditJob from "./pages/Editjob";
import ApplicantDetails from "./pages/ApplicantDetails";
import JobDetails from "./pages/JobDetails";

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
    element: <JobsLayout />,
    children: [
      {
        index: true,
        element: <Jobs />,
      },
      {
        path: ":id",
        element: <JobDetails />,
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRole={["candidate"]} />,
    children: [
      {
        path: "/profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <CandidateProfile />,
          },
          {
            path: "my-applications",
            element: <MyApplications />,
          },
        ],
      },
    ],
  },
  {
  element: <ProtectedRoute allowedRole={["recruiter"]} />,
  children: [
    {
      path: "/recruiter",
      element: <RecruiterLayout />,
      children: [
        {
          index: true,
          element: <RecruiterDashboard />,
        },
        {
          path: "jobs",
          element: <RecruiterJobs />,
        },
        {
          path: "jobs/create",
          element: <CreateJob />,
        },
        {
          path: "jobs/:id/edit",
          element: <EditJob />,
        },
        {
          path: "jobs/:id/applicants",
          element: <Applicants />,
        },
        {
          path: "applications/:id",
          element: <ApplicantDetails />,
        },
        {
          path: "profile",
          element: <RecruiterProfile />,
        },
      ],
    },
  ],
},
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
