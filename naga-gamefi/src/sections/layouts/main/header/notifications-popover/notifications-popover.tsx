'use client';

import { useContext } from 'react';
import { m } from 'framer-motion';
// @mui
import { Badge, Box, Divider, IconButton } from '@mui/material';
// components
import { varHover } from 'src/components/animate';
import CustomPopover from 'src/components/custom-popover';
import SvgIcon from 'src/components/svg-icon';
import { Context } from './context';

// ----------------------------------------------------------------------

export default function NoticePopover() {
  const { popover, badgeNum, matches, renderHead, renderList, renderNoList, readAllBtn } =
    useContext(Context);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100% + 1px)"
        onClick={popover?.onOpen}
        sx={{
          display: 'flex',
        }}
      >
        <IconButton
          component={m.button}
          whileTap="tap"
          whileHover="hover"
          variants={varHover(1.05)}
          sx={{
            width: 22,
            height: 22,
            padding: 0,
            borderRadius: '100%',
            ...(popover?.open && {
              bgcolor: 'action.selected',
            }),
            // '& .svgstyle': { color: 'var(--naga-font-header-login)' },
            // '&:hover .svgstyle': { color: 'var(--naga-font-hundred)' },
          }}
        >
          <Badge badgeContent={badgeNum} color="error" max={99}>
            <SvgIcon name="notice" />
          </Badge>
        </IconButton>
      </Box>

      <CustomPopover
        arrow="top-center"
        hiddenArrow
        open={popover?.open}
        onClose={popover?.onClose}
        sx={{ width: 400, overflow: 'hidden', maxHeight: 530 }}
      >
        {renderHead}

        <Divider />

        {renderList}

        <Divider />

        {readAllBtn}
      </CustomPopover>
    </>
  );
}
