import { MyNavLink } from 'components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const MobilMenuItem = ({ item }) => {
  const [openSub, setOpenSub] = useState(false);

  return (
    <>
      <div className="flex items-center text-2xl">
        <MyNavLink text={item.title} path={item.path} />
        {item.children.length > 0 &&
          (openSub ? (
            <AiOutlineMinus
              onClick={() => setOpenSub((prev) => !prev)}
              className="ml-2 cursor-pointer font-semibold text-black  hover:text-red-700 dark:text-gray-200 dark:hover:text-red-700"
            />
          ) : (
            <AiOutlinePlus
              onClick={() => setOpenSub((prev) => !prev)}
              className="ml-2 cursor-pointer font-semibold text-black  hover:text-red-700 dark:text-gray-200 dark:hover:text-red-700"
            />
          ))}
      </div>
      {item.children.length > 0 && openSub && (
        <ul className="flex flex-col items-start py-2 pl-4">
          {item.children.map((subItem, index) => (
            <li key={index} className="text-xl">
              <MyNavLink text={subItem.title} path={subItem.path} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MobilMenuItem;
