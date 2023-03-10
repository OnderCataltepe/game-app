import { Link } from 'react-router-dom';
import { LinkButton } from 'components';
import { ratingColor } from 'utils';
const GameCard = ({ item }) => {
  const ratColor = ratingColor(item.rating);
  return (
    <div className="flex flex-col border border-zinc-300 dark:border-zinc-900">
      <div className="group relative flex flex-col">
        <img
          alt={item.name}
          src={item.background_image}
          className="aspect-video w-full grayscale group-hover:grayscale-0"
        />
        <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black to-transparent p-1 text-center ">
          <p className="text-xl font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-3xl">
            {item.name}
          </p>
        </div>
        <Link
          state={{ id: item.id }}
          to={`/game/${item.slug}`}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-lg bg-black bg-opacity-75 p-2 text-center font-semibold text-white hover:text-red-700 hover:underline md:text-xl"
        >
          Details
        </Link>
        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-opacity-10 bg-gradient-to-t from-black to-transparent p-2">
          <p className="text-base font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-xl">
            {' '}
            Release Date: {item.released}
          </p>
          <p className="text-base font-semibold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,1)] md:text-xl">
            <span className={ratColor}> {item.rating}</span>
            /5
          </p>
        </div>
      </div>
      <div className="flex flex-col  px-2 ">
        <div className="flex items-center py-4">
          <p className="min-w-[80px] font-semibold dark:text-white">Genres:</p>
          <div className="flex flex-wrap">
            {item.genres.map((item) => (
              <LinkButton key={item.id} path={`/genres/${item.slug}`} item={item} />
            ))}
          </div>
        </div>
        <div className="flex items-start py-4">
          <p className="min-w-[80px] font-semibold dark:text-white">Platforms:</p>
          <div className="flex flex-wrap">
            {item.platforms.map((item) => (
              <LinkButton
                key={item.platform.id}
                path={`/platforms/${item.platform.slug}`}
                item={item.platform}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
