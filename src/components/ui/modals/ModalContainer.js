import { IconButton } from 'components';
import { AiOutlineClose } from 'react-icons/ai';
const ModalContainer = ({ open, setOpen, children, position }) => {
  const positions = {
    center: 'items-center justify-center',
    top: 'justify-start'
  };

  return (
    <div
      className={`${open && 'modalOpened'} fixed inset-0 z-50 mx-auto flex w-full ${
        positions[position]
      } overflow-y-auto overflow-x-hidden bg-black bg-opacity-70  py-8 outline-none focus:outline-none`}
    >
      <div className="relative mx-auto w-3/4 p-1 md:w-2/4">
        <div className="right-n absolute -top-5 -right-5 z-50 text-white outline-none focus:outline-none">
          <IconButton onClick={() => setOpen(false)} icon={<AiOutlineClose />} />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
