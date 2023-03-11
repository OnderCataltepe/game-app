import { ModalContainer, SearchForm, IconButton } from 'components';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchModal = () => {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <>
      <IconButton onClick={() => setOpenSearch(true)} icon={<AiOutlineSearch />} />
      {openSearch && (
        <ModalContainer open={openSearch} setOpen={setOpenSearch} position="top">
          <SearchForm closeHandler={() => setOpenSearch(false)} />
        </ModalContainer>
      )}
    </>
  );
};

export default SearchModal;
