// @mui
import Box from '@mui/material/Box';
//
import Image from '../image';

// ----------------------------------------------------------------------

type Props = {
  imgUrl?: string;
  isVideo?: boolean;
};

export default function SingleFilePreview({ imgUrl = '', isVideo }: Props) {
  return (
    <Box
      sx={{
        p: 1,
        top: 0,
        left: 0,
        width: 1,
        height: 1,
        position: 'absolute',

        ...(isVideo && {
          minHeight: '380px',
        }),
      }}
    >
      {isVideo ? (
        <video controls muted autoPlay>
          <source
            src={imgUrl}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
            }}
          />
          <track kind="captions" />
        </video>
      ) : (
        <Image
          alt="file preview"
          src={imgUrl}
          sx={{
            width: 1,
            height: 1,
            borderRadius: 1,
          }}
        />
      )}
    </Box>
  );
}
