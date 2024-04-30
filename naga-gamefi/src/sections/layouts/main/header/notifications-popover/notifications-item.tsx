import React, { useMemo } from 'react';

import ListItemButton from '@mui/material/ListItemButton';
import { Box, ListItemText, Stack } from '@mui/material';
import { fDateTime } from 'src/utils/format-time';

export default function NotificationItem({
  noticeItem,
  onBtnItemClick,
}: {
  noticeItem: NoticeListType;
  onBtnItemClick: () => void;
}) {
  const { id, status, content, createTime, questId } = noticeItem;

  // 红点 —— 通知是否已读
  const renderUnReadBadge = useMemo(
    () =>
      status === 0 && (
        <Box
          sx={{
            top: 26,
            width: 6,
            height: 6,
            left: 10,
            borderRadius: '50%',
            bgcolor: 'error.main',
            position: 'absolute',
          }}
        />
      ),
    [status]
  );

  // 内容
  const renderText = (
    <ListItemText
      disableTypography
      primary={reader(content)}
      secondary={
        <Stack
          direction="column"
          alignItems="flex-start"
          sx={{ typography: 'caption', color: 'text.disabled' }}
        >
          {fDateTime(createTime * 1000, 'yyyy-MM-dd HH:mm:ss')}
        </Stack>
      }
    />
  );

  return (
    <ListItemButton
      disableRipple
      sx={({ palette }) => ({
        p: '20px 24px',
        alignItems: 'flex-start',
        borderBottom: `1px solid ${palette.action.selected}`,
        '&:last-child': {
          borderBottom: 'none',
        },
      })}
      onClick={() => onBtnItemClick()}
    >
      {renderUnReadBadge}

      <Stack sx={{ flexGrow: 1 }}>{renderText}</Stack>
    </ListItemButton>
  );
}

// ----------------------------------------------------------------------

function reader(data: string) {
  return (
    <Box
      dangerouslySetInnerHTML={{ __html: data }}
      sx={{
        mb: 0.5,
        '& p': { typography: 'body2', m: 0 },
        '& a': { color: 'inherit', textDecoration: 'none' },
        '& strong': { typography: 'subtitle2' },
      }}
    />
  );
}
