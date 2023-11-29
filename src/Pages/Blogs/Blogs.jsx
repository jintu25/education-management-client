import { useEffect, useState } from "react";
import DetailBlogs from "./DetailBlogs";
import CoverBanner from "../../Shared/CoverBanner/CoverBanner";
import coverimg from '../../assets/images/banner/blogs.avif'
const Blogs = () => {
    const [ blogs, setBlogs ] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
        })
    }, [])
    return (
        <>
        <CoverBanner bannerImage={coverimg} heading={'Blogs'}></CoverBanner>
        <div className="max-w-screen-xl m-auto py-20">
            {
                blogs.map(blog => <DetailBlogs key={blog._id} blog={blog}></DetailBlogs>)
            }
        </div>
        </>
    );
};

export default Blogs;