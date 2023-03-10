import { errorImg } from 'assets';
import parse from 'html-react-parser';
const ErrorMessage = ({ message }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="relative w-full">
        <img className=" block h-auto w-full shadow-inner grayscale" src={errorImg} />

        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center font-semibold [&>h1]:mb-2 [&>h1]:text-xl [&>h1]:text-red-700 [&>h1]:md:text-5xl [&>p]:text-base [&>p]:md:text-xl">
          {parse(message)}
        </div>
      </div>
    </div>
  );
};

export default ErrorMessage;
