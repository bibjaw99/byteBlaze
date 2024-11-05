import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar/Navbar";
import { Blogs } from "../pages/Blogs";
import { Bookmarks } from "../pages/Bookmarks";
import { Home } from "../pages/Home";
import { Footer } from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <div className="h-[80px]">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-132px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export { MainLayout };
