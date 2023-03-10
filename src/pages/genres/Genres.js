import { PageTitle, CategoryCard, Loading } from 'components';
import { useGetListQuery } from 'redux/apiSlice';
import { genresImg } from 'assets';
const Genres = () => {
  const { data, isError, isLoading, error } = useGetListQuery('genres');
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.data);
  }
  return (
    <div className="flex w-full flex-col">
      <PageTitle title={isError ? error.originalStatus : 'Choose Your Genre'} img={genresImg} />

      <div className="grid w-full grid-cols-2 gap-2 py-6 px-4 md:grid-cols-4 md:gap-4">
        {data &&
          data.results.map((item) => <CategoryCard type="genres" key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Genres;
