import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const router=createBrowserRouter([
      {
            path:'/',
            element:<MainLayout></MainLayout>,
            children:[
                  {
                        path:"*",
                        element:<div>on the working </div>
                  }
            ]
      }
])

export default router;