import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import DetailsCourse from "../Pages/Home/Courses/DetailsCourse";
import PrivateRoute from "./PrivateRoute";
import UserProfile from "../Pages/Dashboard/UserDashboard/userProfile";
import Events from "../Pages/Events/Events";
import Blogs from "../Pages/Blogs/Blogs";
import CoursesPage from "../Pages/CoursesPage/CoursesPage";
import DashboardLayout from "../Layout/DashboardLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
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
    ],
  },

  {
    path: 'dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
          path: 'userprofile',
          element: <UserProfile></UserProfile>
      }
    ]
  }
]);
