const CoverBanner = ({ bannerImage, heading }) => {
  return (
    <div className="coverBanner relative">
      <img className="w-full h-96" src={bannerImage} alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      <h2 className="absolute top-[50%] left-[10%] text-white z-10 text-3xl font-serif font-semibold">
        {heading}
      </h2>
    </div>
  );
};

export default CoverBanner;
