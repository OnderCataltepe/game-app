import { HamburgerButton, ThemeButton, MobilMenuItem } from 'components';
import { useState } from 'react';
const MobilNav = ({ data }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="flex items-center justify-center md:hidden">
      <HamburgerButton openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && (
        <div
          id="mobilMenu"
          className="absolute top-full left-0 z-50 flex w-full animate-leftToRight bg-white dark:bg-black md:hidden"
        >
          <div className="flex h-screen w-full flex-col overflow-y-auto p-4 pb-20">
            <ul className="mb-2 flex w-full flex-col items-start bg-inherit">
              {data.map((item, index) => (
                <li key={index} className=" bg-inherit py-2 ">
                  <MobilMenuItem item={item} />
                </li>
              ))}
            </ul>
            <ThemeButton />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobilNav;
