import { Link } from "react-router-dom";

const Upcoming = ({ upcoming }) => {
  const { name, img, date, details } = upcoming;
  return (
    <div className=" border-b-2 bg-white p-3">
      <div className="grid-container grid grid-cols-6 mb-4 gap-6 items-center py-3">
        <div className="col-span-2">
          <img className=" h-32 w-40" src={img} alt="" />
        </div>
        <div className="mt-2 col-span-4">
          <Link className="text-[#002147] text-xl hover:text-[#fdc800] ease-in-out duration-300 font-semibold font-[sans-serif]">
            {name}
          </Link>
          
          <h5 className="text-[18px] font-medium text-[#555555] my-2">
            {date}
          </h5>
          <p className="text-[16px] font-normal font-serif text-slate-700">
            {details.length > 80 ? `${details.substring(0, 80)}...` : details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
