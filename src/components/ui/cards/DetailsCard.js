import parse from 'html-react-parser';
import { ratingColor } from 'utils';
import { LinkButton, TrailerModal } from 'components';
const DetailsCard = ({ item }) => {
  const ratColor = ratingColor(item.rating);

  return (
    <div className="m-2 flex flex-col border border-gray-700 font-poppins dark:border-gray-200 md:flex-row">
      <div className="w-full md:w-1/3 md:border-r md:border-gray-700 md:dark:border-gray-200">
        <div className="px-4 py-6  dark:text-gray-200 md:px-8">
          <p className="mb-2 text-base font-bold md:text-xl">Description:</p>{' '}
          {parse(item.description)}
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div className="flex items-center px-4 py-6  dark:text-gray-200 md:px-8">
          <p className="mr-2 text-base font-bold md:text-xl">Trailer:</p>{' '}
          <TrailerModal movieId={item.id} />
        </div>
      </div>
      <hr className="my-4 block border-gray-700 dark:border-gray-200 md:hidden" />
      <div className=" w-full px-4 py-6 dark:text-gray-200 md:w-2/3">
        <div className="flex">
          <div className="w-3/5 border-r border-gray-700 dark:border-gray-200">
            <p className="text-base font-bold md:text-xl">
              Released Date: <span className="pl-2 font-normal">{item.released}</span>
            </p>
          </div>
          <div className="w-2/5 px-2">
            <p className="text-base font-bold md:text-xl">
              Rating: <span className={`${ratColor} font-normal`}> {item.rating}</span>
              <span className="font-normal">/5</span>
            </p>
          </div>
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div>
          <p className="text-base font-bold md:text-xl">
            Developers:
            {item.developers.map((sub) => (
              <span className="pl-2 font-normal" key={sub.id}>
                {sub.name}
              </span>
            ))}
          </p>
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div>
          <p className="text-base font-bold md:text-xl">
            Publishers:{' '}
            {item.publishers.map((sub) => (
              <span className="pl-2 font-normal" key={sub.id}>
                {sub.name}
              </span>
            ))}
          </p>
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div className="flex items-center">
          <p className="text-base font-bold md:text-xl">Genres:</p>{' '}
          <div className="flex flex-wrap pl-2">
            {item.genres &&
              item.genres.map((item) => (
                <LinkButton key={item.id} path={`/genres/${item.slug}?page=1`} item={item} />
              ))}
          </div>
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div className="flex items-center">
          <p className="text-base font-bold md:text-xl">Platforms:</p>{' '}
          <div className="flex flex-wrap pl-2">
            {item.platforms &&
              item.platforms.map((item) => (
                <LinkButton
                  key={item.platform.id}
                  path={`/platforms/${item.platform.slug}?page=1`}
                  item={item.platform}
                />
              ))}
          </div>
        </div>
        <hr className="my-4 border-gray-700 dark:border-gray-200" />
        <div>
          <p className="text-base font-bold md:text-xl">
            Tags:{' '}
            {item.tags.map((sub) => (
              <span className="pl-2 font-normal" key={sub.id}>
                {sub.name},{' '}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
