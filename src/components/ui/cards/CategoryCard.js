import { Link } from 'react-router-dom';
const CategoryCard = ({ item, type }) => {
  return (
    <div className="group relative ">
      <img
        alt=""
        src={item.image_background}
        className="aspect-video w-full grayscale group-hover:grayscale-0"
      />
      <Link
        state={{ id: item.id }}
        to={`/${type}/${item.slug}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg bg-black bg-opacity-75 p-2 text-center font-semibold text-white hover:text-red-700 md:text-xl"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default CategoryCard;
