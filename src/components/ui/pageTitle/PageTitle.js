const PageTitle = ({ img, title }) => {
  return (
    <div className="relative w-full">
      <img className=" block h-auto w-full  shadow-inner grayscale" src={img} />
      <h1 className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-gradient-to-b from-[rgba(0,0,0,0.5)] to-transparent font-poppins text-xl font-semibold tracking-wider text-white drop-shadow-[0_5px_5px_rgba(0,0,0,1)] md:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
