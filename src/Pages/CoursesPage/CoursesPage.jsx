import { useContext } from "react";
import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import cover from "../../assets/images/banner/curses.jpg";
import AllCourses from "./AllCourses";
import { ThemeContext } from "../../Providers/ThemeProvider";
const CoursesPage = () => {
  const {theme} = useContext(ThemeContext)
  return (
    <>
      <CoverBanner bannerImage={cover} heading={"Courses"}></CoverBanner>
      <div className={`${theme}`}>
        <AllCourses></AllCourses>
      </div>
    </>
  );
};

export default CoursesPage;
