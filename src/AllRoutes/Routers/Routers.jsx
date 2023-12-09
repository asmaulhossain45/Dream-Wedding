import { createBrowserRouter } from "react-router-dom";
import Decoration from "../../AllServices/Decoration";
import Food from "../../AllServices/Food";
import Invitation from "../../AllServices/Invitation";
import Makeup from "../../AllServices/Makeup";
import Music from "../../AllServices/Music";
import Photography from "../../AllServices/Photography";
import Services from "../../AllServices/Services";
import ErrorPage from "../../ErrorPage/ErrorPage";
import ContactUs from "../../Layouts/ContactUS/ContactUs";
import Aos from "../../Layouts/Home/Aos";
import HappyCouples from "../../Layouts/Home/HappyCouples";
import Home from "../../Layouts/Home/Home";
import MainLayout from "../../Layouts/MainLayout/MainLayout";
import CreateAccount from "../../Layouts/UserLogin/CreateAccount";
import Login from "../../Layouts/UserLogin/Login";
import Venue from "../../Layouts/Venue/Venue";
import PrivateRoute from "./PrivateRoute";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/services",
        element: (
          <PrivateRoute>
            <Services></Services>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/1",
        element: (
          <PrivateRoute>
            <Food></Food>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/2",
        element: (
          <PrivateRoute>
            <Music></Music>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/3",
        element: (
          <PrivateRoute>
            <Photography></Photography>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/4",
        element: (
          <PrivateRoute>
            <Decoration></Decoration>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/5",
        element: (
          <PrivateRoute>
            <Invitation></Invitation>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/service/6",
        element: (
          <PrivateRoute>
            <Makeup></Makeup>
          </PrivateRoute>
        ),
        loader: () => fetch("/Services.json"),
      },
      {
        path: "/happyCouples",
        element: <HappyCouples></HappyCouples>,
        loader: () => fetch("/Couples.json"),
      },
      {
        path: "/venue",
        element: (
          <PrivateRoute>
            <Venue></Venue>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <CreateAccount></CreateAccount>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/aos",
        element: <Aos></Aos>,
      },
    ],
  },
]);

export default Routers;
