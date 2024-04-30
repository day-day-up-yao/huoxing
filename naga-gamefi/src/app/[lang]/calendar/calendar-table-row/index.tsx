import React, { useMemo } from 'react';
import { Avatar, Box, Button, ListItemText, Stack, TableCell, TableRow } from '@mui/material';
import { useTheme } from '@mui/system';
import { useSettingsContext } from 'src/sections/layouts/settings';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

type Props = {
  t: any;
  item: EventCalendarListType;
  catData: EventCalendarCatType[];
  smUp: boolean;
};

const CalendarTableRow = ({ t, item, catData, smUp }: Props) => {
  const theme = useTheme();
  const { lang } = useSettingsContext();

  // 是否是 项目链信息
  const isProject = useMemo(
    () => !!(item.projectIcon && item.projectName),
    [item.projectIcon, item.projectName]
  );

  // 图标
  const avatarDom = useMemo(
    () => (
      <TableCell component="div" sx={{ whiteSpace: 'nowrap', width: 50, verticalAlign: 'top' }}>
        <Avatar
          src={
            item.gameId && item.gameIcon
              ? item.gameIcon
              : isProject
              ? item.projectIcon
              : '/images/icon/icon-calendar.webp'
          }
          sx={{ width: 50, height: 50 }}
        />
      </TableCell>
    ),
    [isProject, item.gameIcon, item.gameId, item.projectIcon]
  );

  // 名称
  const titleDom = useMemo(
    () => (
      <TableCell component="div" sx={{ whiteSpace: 'nowrap', width: 160, verticalAlign: 'top' }}>
        <ListItemText
          primary={
            item.gameId
              ? item.gameName
              : isProject
              ? item.projectName
              : `${t('event_calendar_game_def')}`
          }
          secondary={
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={({ palette }) => ({
                bgcolor: palette.background.paper,
                borderRadius: '8px',
                p: '2px 8px',
                fontSize: '12px',
                color: palette.text.primary,
                lineHeight: '24px',
                width: 'min-content',
              })}
            >
              {catData?.find((i) => i.id === item.category)?.name || ''}
            </Stack>
          }
          primaryTypographyProps={{
            typography: 'subtitle1',
            sx: {
              width: '160px',
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            },
          }}
          secondaryTypographyProps={{
            mt: '16px',
            component: 'div',
          }}
        />
      </TableCell>
    ),
    [catData, isProject, item.category, item.gameId, item.gameName, item.projectName, t]
  );

  // 内容
  const contentDom = useMemo(
    () => (
      <TableCell
        component="div"
        sx={{ verticalAlign: 'middle', display: 'flex', alignItems: 'center' }}
      >
        <ListItemText
          primary={item.title}
          secondary={item.content || undefined}
          primaryTypographyProps={{
            noWrap: true,
            typography: 'subtitle1',
            sx: {
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              color: (item as any).important === 1 ? '#e60000' : '',
            },
          }}
          secondaryTypographyProps={{
            mt: smUp ? '16px' : '12px',
            noWrap: true,
            component: 'div',
            sx: {
              height: smUp ? '44px' : '32px',
              lineHeight: smUp ? '' : '16px',
              whiteSpace: 'normal',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: item.content ? '-webkit-box' : 'none',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            },
          }}
        />
        {!smUp && (
          <Button
            variant="contained"
            disabled
            size="small"
            color="info"
            sx={{
              color: `${theme.palette.info.contrastText} !important`,
              mt: item.content ? '12px' : '0',
              fontSize: '9px',
            }}
          >
            {catData?.find((i) => i.id === item.category)?.name || ''}
          </Button>
        )}
      </TableCell>
    ),
    [catData, item, smUp, theme.palette.info.contrastText]
  );

  return (
    <TableRow
      sx={({ palette }) => ({
        borderBottom: `1px solid ${palette.background.paper}`,
        '&:last-child': {
          borderBottom: `none`,
        },
      })}
    >
      <TableCell sx={{ p: '0' }}>
        <Stack direction="row" justifyContent="flex-start" gap="16px">
          <Box
            component={item.projectLink && item.projectIcon ? 'a' : 'div'}
            href={
              item.gameId
                ? `/${lang}${paths.game}/${item.gameId}`
                : item.projectLink && item.projectIcon
                ? item.projectLink
                : ''
            }
            target={
              item.gameId ? '_self' : item.projectLink && item.projectIcon ? '_blank' : '_self'
            }
          >
            {avatarDom}
            {smUp ? titleDom : undefined}
          </Box>
          <Box component="a" href={item.sourceLink} target="_blank" sx={{ width: '100%' }}>
            {contentDom}
          </Box>
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default CalendarTableRow;
