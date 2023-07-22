import { Outlet } from "react-router-dom";
import Navigation from "../components/ShareAble/Navigation";

const HomeLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
        </div>
    );
};

export default HomeLayout;