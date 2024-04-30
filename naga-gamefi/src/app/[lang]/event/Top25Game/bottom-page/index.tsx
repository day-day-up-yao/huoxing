import { useContext } from 'react';
import { Stack, Typography, Box, Button, Avatar } from '@mui/material';
import { Link } from 'src/components/link';

import { Context } from '../context';

const TitleHeader = (title: string) => (
  <Stack
    direction="row"
    alignItems="center"
    mt={{ xs: '50px', sm: '90px' }}
    justifyContent="center"
  >
    <img
      style={{
        width: '49px',
      }}
      src="/images/bigimg/vtitleright.png"
      alt=""
    />
    <Typography
      variant="h4"
      sx={{
        fontSize: { xs: '16px', sm: '24px' },
      }}
      color="#FFC24B"
      mx={{ xs: '11px', sm: '16px' }}
    >
      {title}
    </Typography>
    <img
      style={{
        width: '49px',
      }}
      src="/images/bigimg/vtitleleft.png"
      alt=""
    />
  </Stack>
);

const logotitleDom = (item: any) => (
  <Link
    style={{
      color: '#fff',
    }}
    href={item?.jumpUrl}
    target="_blank"
    key={item?.title}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar
        sx={{
          width: { xs: '32px', sm: '56px' },
          height: { xs: '32px', sm: '56px' },
        }}
        src={item?.picUrl}
      />
      <Typography variant="body2" mt="16px" fontSize={{ xs: '12px', sm: '16px' }}>
        {item?.title}
      </Typography>
    </Box>
  </Link>
);

export default () => {
  const { activitylogolist, t } = useContext(Context);
  return (
    <Box>
      <Box>
        {TitleHeader(t('vote_to_js'))}
        <Typography variant="body2" lineHeight="30px" textAlign="center" mt="34px">
          {t('vote_data')}
          <br />
          {t('vote_relus')}
          <br />
          {t('vote_befaur')}
          <br />
          {t('vote_text')}
        </Typography>
      </Box>
      <Box>
        {TitleHeader(t('vote_j_g'))}
        <Stack
          direction="row"
          mt="34px"
          gap={{ xs: '30px', sm: '50px' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {activitylogolist[0]?.logoList?.map((item: any, index: any) => (
            <Box key={index}>{logotitleDom(item)}</Box>
          ))}
          {/* {logotitleDom()} */}
        </Stack>
      </Box>
      <Box>
        {TitleHeader(t('vote_s_q'))}
        <Stack
          direction="row"
          mt="34px"
          gap={{ xs: '30px', sm: '50px' }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {activitylogolist[1]?.logoList?.map((item: any, index: any) => (
            <Box key={index}>{logotitleDom(item)}</Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
