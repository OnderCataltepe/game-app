import LargeNav from './largeNav/LargeNav';
import MobilNav from './mobilNav/MobilNav';
import { useGetListQuery } from 'redux/apiSlice';

const Navbar = () => {
  const { data: genreData } = useGetListQuery('genres');
  const { data: platformData } = useGetListQuery('platforms/lists/parents');

  const genreChildren =
    genreData && genreData.results.map((item) => ({ title: item.name, path: item.slug }));
  const platformChildren =
    platformData && platformData.results.map((item) => ({ title: item.name, path: item.slug }));
  const navData = [
    { title: 'Home', path: '/', children: [] },
    {
      title: 'Genres',
      path: '/genres',
      children: genreChildren
    },
    {
      title: 'Platforms',
      path: '/platforms',
      children: platformChildren
    }
  ];

  return (
    <nav className="flex bg-inherit font-poppins tracking-wide">
      {genreData && platformData && (
        <>
          <LargeNav data={navData} />
          <MobilNav data={navData} />
        </>
      )}
    </nav>
  );
};

export default Navbar;
