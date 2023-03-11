import { IconButton } from 'components';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRef } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
const SearchForm = ({ closeHandler }) => {
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchRef.current.value.trim().length > 0) {
      navigate({
        pathname: '/search',
        search: createSearchParams({ q: searchRef.current.value, page: 1 }).toString()
      });
      closeHandler();
    }
    searchRef.current.value = '';
  };
  return (
    <form onSubmit={submitHandler} method="GET" className="w-full">
      <div className="relative w-full py-4">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <IconButton type="submit" color="gray" icon={<AiOutlineSearch />} />
        </span>
        <input
          ref={searchRef}
          type="search"
          name="q"
          className=" w-3/4 rounded-md bg-slate-200 py-2 pl-10 text-sm text-gray-600 focus:bg-white focus:outline-slate-400 md:w-full"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
    </form>
  );
};

export default SearchForm;
