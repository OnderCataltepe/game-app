import { Link } from 'react-router-dom';
const CategoryCard = ({ item, type }) => {
  const img = (imageType) => {
    switch (imageType) {
      case 'genres':
        return item.image_background;
      case 'platforms':
        return item.platforms[0].image_background;
      default:
        return item.image_background;
    }
  };

  return (
    <div className="group relative ">
      <img
        alt=""
        src={img(type)}
        className="aspect-video w-full grayscale group-hover:grayscale-0"
      />
      <Link
        to={`/${type}/${item.slug}`}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg bg-black bg-opacity-75 p-2 text-center font-semibold text-white hover:text-red-700 md:text-xl"
      >
        {item.name}
      </Link>
    </div>
  );
};

export default CategoryCard;
