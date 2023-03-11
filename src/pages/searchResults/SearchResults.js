import { useGetSearchQuery } from 'redux/apiSlice';
import { useSearchParams } from 'react-router-dom';
import { PageTitle, Loading, GameCard, ErrorMessage, Paginate } from 'components';
import { searchImg } from 'assets';
const SearchResults = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q');
  const page = searchParams.get('page');
  const { data, isError, isLoading, error } = useGetSearchQuery({
    url: 'games',
    searchQ: query,
    page: page
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
    return <ErrorMessage message={error.data} />;
  }
  return (
    <div className="flex w-full flex-col">
      <PageTitle
        title={
          data.results.length > 0
            ? `Search Results for ${query.toUpperCase()}`
            : `No Result Found for ${query.toUpperCase()}`
        }
        img={searchImg}
      />

      <div className="grid w-full grid-cols-1 gap-2 py-6 px-4 md:grid-cols-2 md:gap-4">
        {data.results.length > 0 &&
          data.results.map((item) => <GameCard key={item.id} item={item} />)}
      </div>
      <div className="my-2 flex justify-center">
        <Paginate query={query} total={data.count > 10000 ? 10000 : data.count} />
      </div>
    </div>
  );
};

export default SearchResults;
