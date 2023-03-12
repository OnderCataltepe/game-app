import { useLocation, useParams } from 'react-router-dom';
import { useGetMovieDetailsQuery } from 'redux/apiSlice';
import { PageTitle, Loading, ErrorMessage, DetailsCard } from 'components';
import parse from 'html-react-parser';

const GameDetails = () => {
  const { gameId } = useParams();
  const { state } = useLocation();
  const { data, isError, isLoading, error } = useGetMovieDetailsQuery({
    id: state.id
  });
  console.log(gameId);
  console.log(state.id);
  console.log(data);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
    return <ErrorMessage message={error.data} />;
  }
  return (
    <div className="flex w-full flex-col ">
      <PageTitle title={data.name} img={data.background_image} />
      <DetailsCard item={data} />
    </div>
  );
};

export default GameDetails;
