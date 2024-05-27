import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import AddToys from "../Pages/AddToys/AddToys";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login";
import SignUp from "../Pages/Signup/SignUp";
import DollDetails from "../Pages/dolldetails/DollDetails";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path :'/',
            element:<Home></Home>
        },
        {
            path :'/alltoys',
            element:<AllToys></AllToys>,
            loader:() => fetch('http://localhost:5000/doll/')
            
        },
        {
            path :'/mytoys',
            element:<MyToys></MyToys>
        },
        {
            path :'/addtoys',
            element:<AddToys></AddToys>
        },
        {
            path : '/blogs',
            element: <Blogs></Blogs>
        },
        {
            path : '/login',
            element: <Login></Login>
        },
        {
            path : '/signup',
            element: <SignUp></SignUp>
        },
        {
            path:'/dolldetails/:id',
            element:<DollDetails></DollDetails>,
            loader:({params}) => fetch(`http://localhost:5000/doll/${params.id}`)
          }
          
      ]
    },
    {
        path: '/*',
        element:<Error></Error>
    }
  ]);

  export default router