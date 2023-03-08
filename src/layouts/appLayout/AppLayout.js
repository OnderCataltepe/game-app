import { Header, Footer } from 'components';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Header />
      <main className="w-full dark:bg-black">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
