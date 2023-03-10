import { useParams } from 'react-router-dom';
import { useGetDetailsQuery, useGetPlatformListQuery, useGetListQuery } from 'redux/apiSlice';
import { PageTitle, Loading, GameCard, ErrorMessage } from 'components';
import parse from 'html-react-parser';

const PlatformList = () => {
  const { platformId } = useParams();
  const { data: list } = useGetListQuery('platforms');

  const fetchId = list && list.results.find((item) => item.slug === platformId).id;

  const { data, isError, isLoading, error } = useGetPlatformListQuery({
    url: 'games',
    id: fetchId,
    page: '1'
  });

  const {
    data: dataDetails,
    isError: isDetailsError,
    error: detailsError,
    isLoading: isDetailsLoading
  } = useGetDetailsQuery(`platforms/${fetchId}`);
  if (isLoading || isDetailsLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
    return <ErrorMessage message={error.data} />;
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

export default PlatformList;
