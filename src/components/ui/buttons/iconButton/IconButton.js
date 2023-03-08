const IconButton = ({ icon, onClick, type = 'button', color }) => {
  const colors = {
    gray: 'text-gray-500 hover:text-gray-600',
    red: 'text-rose-600 hover:bg-gradient-to-b hover:from-rose-500 hover:to-rose-700'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={` m-1 flex items-center border-none bg-transparent text-2xl font-semibold active:opacity-70 md:text-3xl ${colors[color]}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
