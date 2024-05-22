import Banner from "./Banner";
import Gallery from "./Gallery";

import ShopByCategory from "./ShopByCategory";
import Brands from "./heroSection/Brands";
import HeroSection from "./heroSection/HeroSection";


const Home = () => {
    return (
        <div className=" bg-slate-100">
            <Banner></Banner>
            <HeroSection></HeroSection>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <Brands></Brands>
        </div>
    );
};

export default Home;