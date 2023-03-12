const IconTextBtn = ({ icon, type = 'button', onClick, text, color, disabled = false }) => {
  const colors = {
    lime: 'border-lime-500 text-lime-500 hover:bg-gradient-to-b hover:from-lime-400 hover:to-lime-600',
    amber:
      'border-amber-600 text-amber-600 hover:bg-gradient-to-b hover:from-amber-500 hover:to-amber-700'
  };

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`text group flex min-w-[100px] items-center justify-center rounded-full border bg-transparent py-1 px-4 text-xl font-semibold shadow-md hover:text-white active:opacity-70  ${colors[color]}`}
    >
      {icon} <span className="ml-1 text-base duration-300 group-hover:ml-2">{text}</span>
    </button>
  );
};

export default IconTextBtn;
