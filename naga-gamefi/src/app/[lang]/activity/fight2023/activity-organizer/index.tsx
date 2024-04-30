import React, { useCallback, useContext, useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { useTranslation } from 'react-i18next';

import ActivityOrganizerItem from '../../_components/activity-organizer-item';
import { Context } from '../context';
import ActivityBoxDom from '../../_components/activity-box';

const ActivityOrganizer = () => {
  const { logoGroupList, windowShowType } = useContext(Context);
  const { i18n } = useTranslation();

  // 赞助子列表
  const logoListDom = useCallback(
    (item: ActivityLogoGroupListType, index: number) => (
      <ActivityBoxDom
        title={i18n.language === 'en-us' ? item.titleEn : item.title}
        windowShowType={windowShowType}
        key={index}
      >
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={windowShowType === 2 ? '8px' : '24px'}
        >
          {item.logoList.map((logoItem: ActivityLogoListType, logoIndex: number) => (
            <ActivityOrganizerItem
              {...logoItem}
              //   bgImg="url(/images/activity/fight2023/bg/icon-organizer-border.webp)"
              windowShowType={windowShowType}
              key={logoIndex}
            />
          ))}
        </Stack>
      </ActivityBoxDom>
    ),
    [i18n.language, windowShowType]
  );

  return (
    <Box>
      {logoGroupList?.map((item: ActivityLogoGroupListType, index: number) =>
        logoListDom(item, index)
      )}
    </Box>
  );
};

export default ActivityOrganizer;
