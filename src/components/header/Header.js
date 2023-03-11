import Logo from 'components/logo/Logo';
import Navbar from 'components/navbar/Navbar';
import { useEffect } from 'react';
import { ThemeButton, SearchModal } from 'components';

const Header = () => {
  let timeout;
  let scroll = 0;
  useEffect(() => {
    window.onscroll = () => {
      if (timeout) {
        clearTimeout(timeout);
      }

      timeout = setTimeout(() => {
        if (window.scrollY > 0) {
          document.getElementById('header').classList.add('stickyAnim');
          document.getElementById('headerLogo').classList.add('animateLogo');
        } else {
          document.getElementById('header').classList.remove('stickyAnim');
          document.getElementById('headerLogo').classList.remove('animateLogo');
        }

        scroll = window.scrollY;
      }, 10);
    };
  }, []);

  return (
    <header id="header" className="fixed z-50 w-full">
      <div className="relative flex h-full items-stretch justify-between bg-inherit px-4 md:px-8">
        <Logo />
        <Navbar />
        <div className="hidden items-center text-black dark:text-gray-200 md:flex">
          <SearchModal />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};
export default Header;
