import React, { useMemo, useContext } from 'react';
import { Box, Avatar, Stack, Typography } from '@mui/material';
import SvgIcon from 'src/components/svg-icon';
import { Context } from '../context';
import UserCon from '../user-con';

export default () => {
  const { accountinfo, t, lefttabstype, handleSelectTab, tabslist, isDark, linkTo } =
    useContext(Context);

  // 用户信息
  const headerInfo = useMemo(
    () => (
      <Stack
        sx={{
          position: 'relative',
        }}
        direction="row"
        justifyContent="space-between"
      >
        <Stack direction="row">
          <Avatar
            src={accountinfo.avatarUrl}
            sx={{
              width: '64px',
              height: '64px',
            }}
          />
          <Box ml="16px">
            <Typography variant="h5">{accountinfo.name}</Typography>
            <Typography variant="body1" mt="5px" color="text.secondary">
              {accountinfo.metamaskAddr?.slice(0, 5)}...{accountinfo.metamaskAddr?.slice(-4)}
            </Typography>
          </Box>
        </Stack>
        {/* <Stack direction="row" alignItems="center">
          <img
            src="/images/icon/bs.png"
            style={{
              width: '48px',
              height: '48px',
            }}
            alt=""
          />
          <Box ml="3px">
            <Typography variant="h4">{accountinfo.strBonus}</Typography>
          </Box>
        </Stack> */}
        {/* <Box
          sx={({ palette }) => ({
            position: 'absolute',
            top: '-10px',
            right: 0,
          })}
          onClick={() => linkTo('/usersetting')}
        >
          <SvgIcon name="settings" />
        </Box> */}
      </Stack>
    ),
    [accountinfo.avatarUrl, accountinfo.metamaskAddr, accountinfo.name]
  );

  // tab切换
  const userTab = useMemo(
    () => (
      <Stack
        direction="row"
        mt="30px"
        gap="20px"
        sx={{
          overflowX: 'auto',
          flexWrap: 'nowrap',
        }}
      >
        {tabslist.slice(0, 4).map((item: any, index: any) => (
          <Typography
            variant="body1"
            key={index}
            onClick={() => handleSelectTab(index)}
            sx={{
              color: lefttabstype === index ? '' : 'text.secondary',
              paddingBottom: '16px',
              borderBottom: lefttabstype === index ? '2px solid #E60000' : 'none',
              whiteSpace: 'nowrap',
            }}
          >
            {item.name}
          </Typography>
        ))}
      </Stack>
    ),
    [handleSelectTab, lefttabstype, tabslist]
  );
  return (
    <Box>
      {headerInfo}
      {userTab}
      <UserCon />
    </Box>
  );
};
