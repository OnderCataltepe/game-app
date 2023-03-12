import { ModalContainer, IconTextBtn, Loading, ErrorMessage } from 'components';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useState } from 'react';
import { useGetTrailersQuery } from 'redux/apiSlice';

const TrailerModal = ({ movieId }) => {
  const [openTrailer, setOpenTrailer] = useState(false);
  const { data, isError, isLoading, error } = useGetTrailersQuery({
    id: movieId
  });
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    console.log(error);
    return <ErrorMessage message={error.data} />;
  }
  console.log(data);

  return (
    <>
      {data.results.length > 0 ? (
        <>
          <IconTextBtn
            disabled={data.results.length === 0 ? true : false}
            text="Play"
            onClick={() => setOpenTrailer(true)}
            color="amber"
            icon={<AiFillPlayCircle />}
          />
          {openTrailer && (
            <ModalContainer open={openTrailer} setOpen={setOpenTrailer} position="center">
              <iframe
                className="aspect-video w-full"
                src={data.results[0].data.max}
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                title="video"
              />
            </ModalContainer>
          )}
        </>
      ) : (
        <p>There is no trailer.</p>
      )}
    </>
  );
};

export default TrailerModal;
