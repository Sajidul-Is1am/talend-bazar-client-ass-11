import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
    return (
        <div className="font-dm-font">
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;