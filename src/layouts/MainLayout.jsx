import { Outlet } from "react-router-dom";
import Navbar from "../components/sharedComponents/Navbar";


const MainLayout = () => {
    return (
        <div>
            <div className="h-16">
                <Navbar />
            </div>
            <Outlet />
        </div>
    );
};

export default MainLayout;