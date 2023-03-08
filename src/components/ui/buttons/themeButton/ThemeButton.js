import { useTheme } from 'hooks/useTheme';
import { useState } from 'react';
import { BsFillSunFill } from 'react-icons/bs';
import { RxMoon } from 'react-icons/rx';
const ThemeButton = () => {
  const [colorTheme, setTheme] = useTheme();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const toggleDarkMode = (e) => {
    setTheme(colorTheme);
    setDarkSide(e.target.checked);
  };
  return (
    <div className="flex">
      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          value=""
          className="peer sr-only "
          checked={darkSide}
          onChange={toggleDarkMode}
        />
        <div className="peer relative flex w-20 items-center justify-start rounded-full bg-slate-400 bg-opacity-25 p-1 peer-checked:justify-end [&>span]:right-1 peer-checked:[&>span]:-translate-x-12">
          {darkSide ? (
            <RxMoon className="text-2xl text-indigo-800" />
          ) : (
            <BsFillSunFill className="text-2xl text-yellow-500" />
          )}
          <span className="absolute h-5 w-5 rounded-full border border-gray-300 bg-white  transition-all duration-500 "></span>
        </div>
      </label>
    </div>
  );
};

export default ThemeButton;
