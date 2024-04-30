'use client';

import { useCallback } from 'react';
import { m } from 'framer-motion';
// @mui
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
// locales
import { Box, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/system';
import { useLocales } from 'src/locales';
// components
// import Iconify from 'src/components/iconify';
import { varHover } from 'src/components/animate';
import CustomPopover, { usePopover } from 'src/components/custom-popover';
import SvgIcon from 'src/components/svg-icon';

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const locales = useLocales();

  const popover = usePopover();

  const handleChangeLang = useCallback(
    (newLang: string) => {
      locales.onChangeLang(newLang);
      popover.onClose();
    },
    [locales, popover]
  );

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="calc(100% + 1px)"
        onClick={popover.onOpen}
        sx={{
          display: matches ? 'none' : 'flex',
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
            overflow: 'hidden',
            borderRadius: '100%',
            ...(popover.open && {
              bgcolor: 'action.selected',
            }),
            // '& .svgstyle': { color: 'var(--naga-font-header-login)' },
            // '&:hover .svgstyle': { color: 'var(--naga-font-hundred)' },
          }}
        >
          <SvgIcon name="web" />
          {/* <Iconify icon={locales.currentLang.icon} sx={{ borderRadius: 0.65, width: 28 }} /> */}
        </IconButton>
      </Box>

      <CustomPopover
        arrow="top-center"
        hiddenArrow
        open={popover.open}
        onClose={popover.onClose}
        sx={{ width: 186, overflow: 'hidden' }}
      >
        {locales.allLangs.map((option) => (
          <MenuItem
            key={option.value}
            selected={option.value === locales.currentLang.value}
            onClick={() => handleChangeLang(option.value)}
            sx={{
              height: 48,
              padding: '0 20px',
              // color: 'var(--naga-font-header-login)',
              // '&:hover': { color: 'var(--naga-font-hundred)' },
            }}
          >
            {/* <Iconify icon={option.icon} sx={{ borderRadius: 0.65, width: 28 }} /> */}

            {option.label}
          </MenuItem>
        ))}
      </CustomPopover>
    </>
  );
}
