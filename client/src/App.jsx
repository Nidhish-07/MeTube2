import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Menu from "./components/Sidebar";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Video from "./pages/Video";

// const Dashboard=()=>{
//   return{
//     <NavBar/>
//   }
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true
  },
  { path: "/video/", children: [{ path: "/video/:id", element: <div className="py-5 px-24"> <Video></Video></div> }] },
]);
const App = () => {
  return (
    <div className="flex">
      <Menu></Menu>
      <div className="flex-[7]">
        <NavBar></NavBar>
        <div>
          <RouterProvider router={router}></RouterProvider>
        </div>
      </div>
    </div>
  );
};

export default App;
