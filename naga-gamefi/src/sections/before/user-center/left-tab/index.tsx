import React, { useContext } from 'react';
import { Avatar, Box, ListItemText, Stack, Typography, Button } from '@mui/material';

import SvgIcon from 'src/components/svg-icon';
import { paths } from 'src/routes/paths';
import { useLink } from 'src/components/link';
import { Context } from '../context';

export default () => {
  const { accountinfo, t, lefttabstype, tabslist, handleSelectTab, isDark } = useContext(Context);
  return (
    <Box>
      <Stack direction="row">
        <Avatar
          src={accountinfo.avatarUrl}
          sx={{
            width: '64px',
            height: '64px',
          }}
        />
        <Box ml="16px">
          <Typography variant="h4">{accountinfo.name}</Typography>
          {accountinfo.metamaskAddr && accountinfo.metamaskAddr?.slice(0, 5)}...
          {accountinfo.metamaskAddr?.slice(-4)}
        </Box>
      </Stack>
      {/* <Box mt="56px">
        <Typography variant="body1" color="text.secondary">
          {t('quest_user_points')}
        </Typography>
        <Stack direction="row" mt="6px" alignItems="center">
          <img
            style={{
              width: '60px',
              height: '60px',
            }}
            src="/images/icon/bs.png"
            alt=""
          />
          <Typography variant="h3" ml="-5px">
            {accountinfo.strBonus}
          </Typography>
        </Stack>
      </Box> */}
      <Box mt="56px" ml="-16px">
        {tabslist.map((item: any, index: any) => (
          <Stack
            key={index}
            direction="row"
            height="58px"
            sx={{
              bgcolor: lefttabstype === index ? 'background.paper' : '',
              borderRadius: '5px',
              padding: '16px',
              cursor: 'pointer',
              mt: '16px',
            }}
            onClick={() => handleSelectTab(index)}
          >
            <SvgIcon
              style={{ color: isDark ? (lefttabstype === index ? '#fff' : '#9FACBF') : '#626364' }}
              name={item.icon}
            />
            <Typography
              variant="h5"
              ml="16px"
              fontWeight="400"
              color={lefttabstype === index ? 'text.primary' : 'text.secondary'}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Box>
    </Box>
  );
};
