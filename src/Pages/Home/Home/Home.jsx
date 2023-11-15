import BlogsPost from "../../../Components/Blogs/Blogs/BlogsPost";
import Banner from "../Banner/Banner";
import Counted from "../Counted/Counted";
import Courses from "../Courses/Courses";
import Elementor from "../Elementor/Elementor";
import Instructors from "../Instructors/Instructors";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Elementor></Elementor>
            <Courses></Courses>
            <Counted></Counted>
            <Instructors></Instructors>
            <BlogsPost></BlogsPost>
        </div>
    );
};

export default Home;