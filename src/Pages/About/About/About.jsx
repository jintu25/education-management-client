import AboutUs from "../../../Components/AboutUs/AboutUs";
import CoverBanner from "../../../Shared/CoverBanner/CoverBanner";
import Banner from "../Banner/Banner";
import coverimg from '../../../assets/images/banner/about2.webp'
import { useContext } from "react";
import { ThemeContext } from "../../../Providers/ThemeProvider";
import AboutMore from "../AboutMore/AboutMore";
const About = () => {
    const {theme} = useContext(ThemeContext)
    return (
      <div className={`${theme}`}>
        <CoverBanner bannerImage={coverimg} heading={"About Us"}></CoverBanner>
        <div className="pt-20">
          {/* <Banner></Banner> */}

          <AboutUs></AboutUs>
          <AboutMore/>
        </div>
      </div>
    );
};

export default About;