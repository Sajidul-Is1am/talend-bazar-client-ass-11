import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div className="font-dm-font">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;