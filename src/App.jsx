import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import BlogsDetails from "./pages/BlogsDetails";
import PlaceRoute from "./pages/PlaceRoute";
import NoPage from "./pages/NoPage";


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="best-places" element={<PlaceRoute />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
))
function App() { 

   
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
