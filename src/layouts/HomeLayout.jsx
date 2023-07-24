import { Outlet } from "react-router-dom";
import Navigation from "../components/ShareAble/Navigation";
import Footer from "../components/ShareAble/Footer";

const HomeLayout = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;