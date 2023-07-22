import About from "../components/StandAlone/About";
import HomeBanner from "../components/StandAlone/HomeBanner";
import PopularColleges from "../components/StandAlone/PopularColleges";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <PopularColleges></PopularColleges>
        </div>
    );
};

export default Home;