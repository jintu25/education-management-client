import BlogsPost from "../../../Components/Blogs/BlogsPost/BlogsPost";
import Banner from "../Banner/Banner";
import Counted from "../Counted/Counted";
import Courses from "../Courses/Courses";
import Elementor from "../Elementor/Elementor";
import Instructors from "../Instructors/Instructors";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Elementor></Elementor>
            <Courses></Courses>
            <Counted></Counted>
            <Instructors></Instructors>
            <BlogsPost></BlogsPost>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;