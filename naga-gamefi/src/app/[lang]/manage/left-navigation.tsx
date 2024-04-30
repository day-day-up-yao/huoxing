import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Button, Stack, Typography } from '@mui/material';
import SvgIcon from 'src/components/svg-icon';
import { usePathname } from 'src/routes/hooks';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';

export const btnNavigationData = [
  // {
  //   name: 'manage_navigation_campaigns',
  //   icon: 'manage-campaigns',
  //   href: '/manage/campaigns',
  // },
  {
    name: 'manage_navigation_task',
    icon: 'manage-task',
    href: paths.manage.task,
  },
  //   {
  //     name: 'manage_navigation_calendar',
  //     icon: 'manage-task',
  //     href: paths.manage.calendar,
  //   },
  {
    name: 'manage_navigation_game_info',
    icon: 'manage-game',
    href: paths.manage.gameInfo,
  },
];

export default function ManageLeftNavigation({ smUp = true }: { smUp: boolean }) {
  const { t } = useTranslation();
  const pathname = usePathname({ pure: true });
  const location = useMemo(() => ({ pathname }), [pathname]);
  const { linkTo } = useLink();

  // 标题
  const readerTitle = useMemo(
    () => (
      <Typography variant="h3" sx={{ flexGrow: 1, mb: '50px', lineHeight: '40px' }}>
        {t('manage_title')}
      </Typography>
    ),
    [t]
  );

  // 按钮列表
  const readerBtnNavigation = useMemo(
    () => (
      <Stack direction={smUp ? 'column' : 'row'} gap="34px">
        {btnNavigationData.map((item, index) => {
          const isActive = location.pathname?.includes(item.href);
          return (
            <Button
              size="large"
              // color={isActive ? 'error' : 'info'}
              variant={isActive ? 'contained' : 'text'}
              startIcon={
                smUp ? (
                  <SvgIcon
                    style={{
                      color: isActive ? '#fff' : '',
                    }}
                    name={item.icon}
                    isWhite
                  />
                ) : (
                  <div />
                )
              }
              endIcon={<div />}
              onClick={() => {
                linkTo(item.href, { client: true });
              }}
              sx={({ palette }) =>
                smUp
                  ? {
                      p: '0 30px',
                      justifyContent: 'flex-start',
                      color: isActive ? '#fff' : palette.text.primary,
                      bgcolor: isActive ? palette.primary.main : palette.background.paper,
                      '.MuiButton-startIcon': {
                        m: 0,
                        mr: '30px',
                      },
                      height: '54px',
                      '&:hover': {
                        bgcolor: isActive ? palette.primary.main : palette.background.paper,
                      },
                    }
                  : {
                      color: isActive ? '#fff' : palette.text.primary,
                      bgcolor: isActive ? palette.primary.main : palette.background.paper,
                      p: '0 10px',
                      '&:hover': {
                        bgcolor: isActive ? palette.primary.main : palette.background.paper,
                      },
                    }
              }
              key={item.name}
            >
              {t(item.name)}
            </Button>
          );
        })}
      </Stack>
    ),
    [linkTo, location.pathname, smUp, t]
  );

  return (
    <Box>
      {smUp && readerTitle}
      {readerBtnNavigation}
    </Box>
  );
}
