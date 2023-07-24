import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DetailsPage from '../pages/DetailsPage';
import Colleges from '../pages/Colleges';
import Profile from "../pages/Profile";
import AdmissionPage from "../pages/AdmissionPage";
import AdmissionForm from "../components/ShareAble/AdmissionForm";
import ErrorPage from "./ErrorPage";
import MyColleges from "../pages/MyColleges";
const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/colleges",
          element: <Colleges></Colleges>
        },
        {
          path: "/my_colleges",
          element: <MyColleges></MyColleges>
        },
        {
          path: "collegeDetails/:id",
          element: <DetailsPage></DetailsPage>,
          loader: ({params}) => fetch(`https://academic-avenue-server.vercel.app/colleges?id=${params.id}`)

        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/profile",
          element: <Profile></Profile>
        },
        {
          path: "/admission",
          element: <AdmissionPage></AdmissionPage>
        },
        {
          path: "/admission/:id",
          element: <AdmissionForm></AdmissionForm>,
          loader: ({params}) => fetch(`https://academic-avenue-server.vercel.app/colleges?id=${params.id}`)
        }
      ]
    },
  ]);
  
export default router;