import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navber";
import Footer from "../Components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-full w-full">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
