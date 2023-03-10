import { NavLink } from 'react-router-dom';

const MyNavLink = ({ text, path, fetchId }) => {
  const bothClass =
    'after:block after:h-[2px] after:w-full after:scale-x-0 after:bg-red-700 after:transition after:duration-300 after:ease-in-out after:content-[""] after:hover:scale-x-100 dark:hover:text-red-700 hover:text-red-700 bg-transparent';

  const activeClass = `${bothClass} text-red-700 font-bold`;
  const defaultClass = `${bothClass} dark:text-gray-200 text-black font-semibold`;
  return (
    <NavLink
      state={{ id: fetchId }}
      to={path}
      className={({ isActive }) => (isActive ? activeClass : defaultClass)}
    >
      {text}
    </NavLink>
  );
};

export default MyNavLink;
