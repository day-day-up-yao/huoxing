import { useContext } from 'react';
import { Stack, Typography, Box } from '@mui/material';

import { Context } from '../context';

const PcDom = (t: any) => (
  <Box
    sx={{
      height: '385px',
      position: 'relative',
    }}
    className="vote-pc-header"
  >
    <Box pt="70px">
      <Typography variant="h1">{t('vote_title')}</Typography>
      <img
        width="466px"
        style={{
          marginTop: '15px',
        }}
        src="/images/bigimg/votelogo.png"
        alt=""
      />
      <Typography variant="body2" width="38%" lineHeight="31px" mt="20px">
        {t('vote_desc')}
      </Typography>
    </Box>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: 0,
        height: '100%',
      }}
    >
      <img
        style={{
          height: '100%',
        }}
        src="/images/bigimg/voterightimg.png"
        alt=""
      />
    </Box>
  </Box>
);

const h5Dom = (t: any) => (
  <Box className="vote-h5-header">
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <Typography variant="h3" width="80%" textAlign="center">
        {t('vote_title')}
      </Typography>
      <img
        width="80%"
        style={{
          marginTop: '8px',
        }}
        src="/images/bigimg/votelogo.png"
        alt=""
      />
      <Typography fontSize="12px" mt="12px" textAlign="center">
        {t('vote_desc')}
      </Typography>
    </Box>
    <Box mt="-60px">
      <img
        style={{
          width: '100%',
        }}
        src="/images/bigimg/voterh5.png"
        alt=""
      />
    </Box>
  </Box>
);

export default () => {
  const { isMob, t } = useContext(Context);
  return (
    <>
      {h5Dom(t)}
      {PcDom(t)}
    </>
  );
};
