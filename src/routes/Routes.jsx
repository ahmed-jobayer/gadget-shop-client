import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Register from "../pages/Register";
import Login from "../pages/Login";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRout from "./private/PrivateRout";
import Overview from "../pages/dashboard/Overview";
import SellerRoutes from "./private/SellerRoutes";
import MyProducts from "../pages/dashboard/seller/MyProducts";
import AddProducts from "../pages/dashboard/seller/AddProducts";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [ 
        {
          path:"/",
          element: <Home></Home>
        },
        {
          path:"/products",
          element: <Products></Products>
        },
        {
          path:"/about",
          element: <About></About>
        },
        {
          path:"/contact-us",
          element: <Contact></Contact>
        },
        {
          path:"/register",
          element: <Register></Register>
        },
        {
          path:"/login",
          element: <Login></Login>
        },
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRout><DashboardLayout/></PrivateRout>,
      children: [
        {
          path: "/dashboard/overview",
          element: <Overview/>
        },
        {
          path: "/dashboard/my-products",
          element: <SellerRoutes><MyProducts></MyProducts></SellerRoutes>
        },
        {
          path: "/dashboard/add-products",
          element: <SellerRoutes><AddProducts></AddProducts></SellerRoutes>
        },
      ]
    }
  ]);