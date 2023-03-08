import { PageTitle } from 'components';

import { errorImg } from 'assets';
const ErrorPage = () => {
  return (
    <div className="flex w-full flex-col">
      <PageTitle title="404" img={errorImg} />
    </div>
  );
};

export default ErrorPage;
