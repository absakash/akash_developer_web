import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Home/Home";
import Contact from "../contact/Contact";

const router=createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:"*",
                        element:<div>on the working </div>
                  },
                  {
                        path:"/",
                        element:<Home></Home>
                  },
                  {
                        path:"/contact",
                        element:<Contact></Contact>
                  },
            ]
      }
])

export default router;