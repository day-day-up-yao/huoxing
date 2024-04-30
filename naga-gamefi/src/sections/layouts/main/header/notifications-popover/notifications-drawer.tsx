'use client';

import { useContext } from 'react';
import { m } from 'framer-motion';
// @mui
import { Badge, Box, Divider, Drawer, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// components
import { varHover } from 'src/components/animate';
import CustomPopover from 'src/components/custom-popover';
import SvgIcon from 'src/components/svg-icon';
import ContextNotifications, { Context } from './context';

// ----------------------------------------------------------------------

export default function NoticePopover() {
  const { drawer, badgeNum, matches, renderHead, renderList, readAllBtn } = useContext(Context);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100% + 1px)"
        color={drawer.value ? 'primary' : 'default'}
        onClick={drawer.onTrue}
        sx={{
          display: matches ? 'flex' : 'none',
        }}
      >
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          sx={{
            height: 22,
            padding: 0,
            borderRadius: '100%',
            ...(drawer.value === 'primary' && {
              bgcolor: 'action.selected',
            }),
            // '& .svgstyle': { color: 'var(--naga-font-header-login)' },
            // '&:hover .svgstyle': { color: 'var(--naga-font-hundred)' },
          }}
        >
          <Badge badgeContent={badgeNum} color="error" max={99} />
          <SvgIcon name="notice" />
          {/* <ArrowForwardIosIcon sx={{ height: 12, ml: '8px', color: 'var(--naga-font-hundred)' }} /> */}
        </IconButton>
      </Box>

      <Drawer
        open={drawer.value}
        onClose={drawer.onFalse}
        anchor="right"
        slotProps={{
          backdrop: { invisible: true },
        }}
        PaperProps={{
          sx: { width: 1, maxWidth: 420 },
        }}
      >
        {renderHead}

        <Divider />

        {renderList}

        <Divider />

        {readAllBtn}
      </Drawer>
    </>
  );
}
