const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 mx-auto flex w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black bg-opacity-70  py-8 outline-none focus:outline-none">
      <div className="flex">
        <span className="mx-5 h-5 w-5 animate-ping rounded-full bg-white"></span>
        <span className="mx-5 h-5 w-5 animate-ping rounded-full bg-white"></span>
        <span className="mx-5 h-5 w-5 animate-ping rounded-full bg-white"></span>
      </div>
    </div>
  );
};

export default Loading;
