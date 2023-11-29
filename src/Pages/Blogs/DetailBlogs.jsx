
const DetailBlogs = ({blog}) => {
    const { name, img, date, details } = blog;
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mx-4 lg:mx-0 my-4 justify-center items-center">
      <div className=" col-span-2">
        <img className="h-[280px] w-96 text-center" src={img} alt="" />
      </div>
      <div className="col-span-3">
        <h3 className="text-[#002147] text-xl ease-in-out duration-300 font-semibold font-[sans-serif] text-center md:text-start">
          {name}
        </h3>

        <h5 className="text-[18px] font-medium text-[#555555] my-2 text-center md:text-start">{date}</h5>
        <p className="text-[16px] font-normal font-serif text-slate-700 text-center md:text-start">
          {details}
        </p>
      </div>
    </div>
    );
};

export default DetailBlogs;