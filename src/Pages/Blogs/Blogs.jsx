import { useContext, useEffect, useState } from "react";
import DetailBlogs from "./DetailBlogs";
import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import coverimg from "../../assets/images/banner/blogs.avif";
import { ThemeContext } from "../../Providers/ThemeProvider";
const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetch("https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);
  return (
    <div className={`${theme}`}>
      <CoverBanner bannerImage={coverimg} heading={"Blogs"}></CoverBanner>
      <div className="max-w-screen-xl m-auto py-20">
        {blogs.map((blog) => (
          <DetailBlogs key={blog._id} blog={blog}></DetailBlogs>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
