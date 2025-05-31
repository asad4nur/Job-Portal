import { Outlet } from "react-router";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;