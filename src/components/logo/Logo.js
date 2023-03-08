import { logo, logoPng } from 'assets';

const Logo = () => {
  return (
    <div id="headerLogo" className="flex h-16 py-3 transition-all duration-500 md:h-32 md:py-6">
      <a href="/" className="flex h-full">
        <img alt="logo" className="h-full w-auto" src={logo} />
      </a>
    </div>
  );
};

export default Logo;
