import { PageTitle, CategoryCard } from 'components';
import { useGetListQuery } from 'redux/apiSlice';
import { Loading } from 'components';
import { platformsImg } from 'assets';
const Platforms = () => {
  const { data, isLoading, isError, error } = useGetListQuery('platforms');
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error.data);
  }
  return (
    <div className="flex w-full flex-col">
      <PageTitle
        title={isError ? error.originalStatus : 'Choose Your Platform'}
        img={platformsImg}
      />

      <div className="grid w-full grid-cols-2 gap-2 py-6 px-4 md:grid-cols-4 md:gap-4">
        {data &&
          data.results.map((item) => <CategoryCard type="platforms" key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default Platforms;
