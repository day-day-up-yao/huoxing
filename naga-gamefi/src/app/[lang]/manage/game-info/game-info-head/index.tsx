import { Stack, Tab, Tabs, Typography } from '@mui/material';
import React, { useContext, useMemo } from 'react';
import { Context } from '../context';
import { MyGameButton } from '../../task/content';

export default () => {
  const { t, TABS, currentTab, handleChangeTab } = useContext(Context);

  // 标题
  const readerTitle = useMemo(
    () => (
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: '24px', height: '40px', width: '100%' }}
      >
        <Typography variant="h4">{t('manage_game_info_title')}</Typography>
        <MyGameButton />
      </Stack>
    ),
    [t]
  );

  // 切换tab
  const renderTabs = (
    <Tabs
      value={currentTab}
      onChange={handleChangeTab}
      sx={{
        mb: '32px',
        '& .MuiTabs-indicator': {
          height: '4px',
          bgcolor: 'text.primary',
        },
      }}
    >
      {TABS.map((tab: { value: string; label: string }) => (
        <Tab
          key={tab.value}
          value={tab.value}
          label={t(tab.label)}
          sx={{
            fontSize: '16px',
            minHeight: '40px',
            minWidth: '200px',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            '&:not(:last-of-type)': {
              mr: '32px',
            },
          }}
        />
      ))}
    </Tabs>
  );

  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="flex-start">
      {readerTitle}
      {renderTabs}
    </Stack>
  );
};
