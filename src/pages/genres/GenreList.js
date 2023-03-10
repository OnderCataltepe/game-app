import { useLocation } from 'react-router-dom';
import { useGetGenreListQuery, useGetDetailsQuery } from 'redux/apiSlice';
import { PageTitle, Loading, GameCard } from 'components';
import parse from 'html-react-parser';

const GenreList = () => {
  const location = useLocation();
  const { state } = location;

  const { data, isError, isLoading, error } = useGetGenreListQuery({
    url: 'games',
    id: state.id,
    page: '1'
  });
  console.log(data);
  console.log(state.id);
  const {
    data: dataDetails,
    isError: isDetailsError,
    error: detailsError,
    isLoading: isDetailsLoading
  } = useGetDetailsQuery(`genres/${state.id}`);
  if (isLoading || isDetailsLoading) {
    return <Loading />;
  }
  return (
    <div className="flex w-full flex-col">
      <PageTitle
        title={isDetailsError ? detailsError.originalStatus : dataDetails.name}
        img={dataDetails.image_background}
      />
      <div className="px-4 py-6 text-center font-poppins dark:text-gray-200 md:px-8">
        {parse(dataDetails.description)}
      </div>
      <div className="grid w-full grid-cols-1 gap-2 py-6 px-4 md:grid-cols-2 md:gap-4">
        {data.results.map((item) => (
          <GameCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GenreList;
