import About from "../components/StandAlone/About";
import Feedback from "../components/StandAlone/Feedback";
import HomeBanner from "../components/StandAlone/HomeBanner";
import PhotoGallery from "../components/StandAlone/PhotoGallery";
import PopularColleges from "../components/StandAlone/PopularColleges";
import Researches from "../components/StandAlone/Researches";

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <About></About>
            <PopularColleges></PopularColleges>
            <PhotoGallery></PhotoGallery>
            <Researches></Researches>
            <Feedback></Feedback>
        </div>
    );
};

export default Home;