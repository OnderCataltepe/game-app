import { NavLink } from 'react-router-dom';

const MyNavLink = ({ text, path, onClick }) => {
  const bothClass =
    'after:block after:h-[2px] after:w-full after:scale-x-0 after:bg-red-700 after:transition after:duration-300 after:ease-in-out after:content-[""] after:hover:scale-x-100 dark:hover:text-red-700 hover:text-red-700 bg-transparent';

  const activeClass = `${bothClass} text-red-700 font-bold`;
  const defaultClass = `${bothClass} dark:text-gray-200  text-black  drop-shadow-[0_3px_3px_rgba(255,255,255,1)] dark:drop-shadow-none font-semibold`;
  return (
    <NavLink
      onClick={onClick}
      to={path}
      className={({ isActive }) => (isActive ? activeClass : defaultClass)}
    >
      {text}
    </NavLink>
  );
};

export default MyNavLink;
