import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import Courses from "../Home/Courses/Courses";
import cover from "../../assets/images/banner/curses.jpg";
const CoursesPage = () => {
  return (
    <>
      <CoverBanner bannerImage={cover} heading={"Courses"}></CoverBanner>
      <div>
        <Courses></Courses>
      </div>
    </>
  );
};

export default CoursesPage;
