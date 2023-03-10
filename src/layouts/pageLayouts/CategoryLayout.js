import { PageTitle, CategoryCard } from 'components';
import { useGetListQuery } from 'redux/apiSlice';
import { Loading, ErrorMessage } from 'components';
import parse from 'html-react-parser';
const CategoryLayout = ({ type, bgImage, title }) => {
  const { data, isLoading, isError, error } = useGetListQuery(type);
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
    return <ErrorMessage message={error.data} />;
  }
  return (
    <div className="flex w-full flex-col">
      <PageTitle title={title} img={bgImage} />

      <div className="grid w-full grid-cols-2 gap-2 py-6 px-4 md:grid-cols-4 md:gap-4">
        {data && data.results.map((item) => <CategoryCard type={type} key={item.id} item={item} />)}
      </div>
    </div>
  );
};

export default CategoryLayout;
