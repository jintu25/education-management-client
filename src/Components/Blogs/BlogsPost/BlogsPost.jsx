import { useContext, useEffect, useState } from "react";
import LatestPost from "../LatestPost/LatestPost";
import Upcoming from "../Upcoming/Upcoming";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";
// import Upcoming from "../Upcoming/Upcoming";

const BlogsPost = () => {
  const [latestBlogs, setLatestBlogs] = useState([]);
  const [upComingEvents, setUpcomingEvents] = useState([]);
  const { theme } = useContext(ThemeContext);
  useEffect(() => {
    fetch("/latestpost.json")
      .then((res) => res.json())
      .then((data) => {
        setLatestBlogs(data);
      });
  }, []);

  useEffect(() => {
    fetch("https://dragon-news-server-n2l9xp6ol-jintu45.vercel.app/events")
      .then((res) => res.json())
      .then((data) => {
        setUpcomingEvents(data);
      });
  }, []);
  return (
    <div className={`${theme}`}>
      <div className=" py-16">
        <div className="max-w-screen-xl m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 mx-4 lg:mx-0 gap-6">
            <div>
              <h2 className="text-[#161616] font-semibold text-4xl mb-12">
                Latest Posts
              </h2>
              {latestBlogs.map((blog) => (
                <LatestPost blog={blog} key={blog._id}></LatestPost>
              ))}
              <div className="w-full flex justify-center mt-10">
                <Link
                  to="/blogs"
                  href="#"
                  className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
                >
                  <span className="font-bold">Read More</span>
                </Link>
              </div>
            </div>
            <div>
              <h2 className="text-[#161616] font-semibold text-4xl mb-12">
                Upcoming Events
              </h2>
              {upComingEvents.map((upcoming) => (
                <Upcoming upcoming={upcoming} key={upcoming._id}></Upcoming>
              ))}
              <div className="w-full flex justify-center mt-10">
                <Link
                  to="/events"
                  href="#"
                  className="flex text-gray-100 justify-center transition duration-200 ease-in-out transform px-4 py-2 w-48 border-b-4 border-gray-500 hover:border-b-2 bg-gradient-to-t from-gray-400  via-gray-600 to-gray-200 rounded-2xl hover:translate-y-px "
                >
                  <span className="font-bold">Read More</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPost;
