import { Link } from 'react-router-dom';

const LinkButton = ({ item, path }) => {
  return (
    <Link
      to={path}
      className=" mx-1 mb-1 border border-red-700 py-1 px-2 text-center font-semibold text-red-700 hover:bg-gradient-to-b hover:from-red-600 hover:to-red-700 hover:text-white hover:underline md:text-lg"
    >
      {item.name}
    </Link>
  );
};

export default LinkButton;
