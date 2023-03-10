import { genresImg } from 'assets';
import { CategoryLayout } from 'layouts';
const Genres = () => {
  return <CategoryLayout title="Choose Your Genre" bgImage={genresImg} type="genres" />;
};

export default Genres;
