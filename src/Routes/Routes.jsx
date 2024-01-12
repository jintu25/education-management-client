import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DetailsCourse from "../Pages/Home/Courses/DetailsCourse";
import PrivateRoute from "./PrivateRoute";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import DashboardLayout from "../Layout/DashboardLayout";
import AllUsers from "../Pages/Dashboard/TeacherDashboard/AllUsers/AllUsers";
import About from "../Pages/About/About/About";
import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import ModeratorRoutes from "./ModaretorRoutes";
import Profile from "../Pages/Dashboard/Profile/Profile";
import AddReview from "../Pages/Dashboard/UserDashboard/AddReview";
import Payments from "../Pages/Home/Courses/Payments/Payments";
import EnrollCourse from "../Pages/Home/Courses/EnrollCourse";
import EnrollStudents from "../Pages/Dashboard/TeacherDashboard/EnrollStudents/EnrollStudents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "*",
        element: <NotFoundPage></NotFoundPage>,
      },
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/courses",
        element: <CoursesPage></CoursesPage>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/detailsCourse/:id",
        element: (
          <PrivateRoute>
            {" "}
            <DetailsCourse></DetailsCourse>
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          try {
            const response = await fetch(
              `http://localhost:5000/courses/${params.id}`
            );
            if (!response.ok) {
              throw new Error("Failed to fetch data");
            }
            const data = await response.json();
            return data;
          } catch (error) {
            console.error("Error fetching data:", error);
            return null; // or return an empty object or array
          }
        },
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payments></Payments>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },

      {
        path: "addreview",
        element: (
          <PrivateRoute>
            <AddReview></AddReview>
          </PrivateRoute>
        ),
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "enrollstudents",
        element: (
          <ModeratorRoutes>
            <EnrollStudents></EnrollStudents>
          </ModeratorRoutes>
        ),
      },
    ],
  },
]);
