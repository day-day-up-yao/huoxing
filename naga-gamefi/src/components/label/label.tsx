import { forwardRef } from 'react';
// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
//
import { BoxProps } from '@mui/system/Box';
import { StyledLabel } from './styles';
import { LabelColor, LabelProps, LabelVariant } from './types';

// ----------------------------------------------------------------------
interface StyledLabelProps extends BoxProps {
  ownerState?: {
    color: LabelColor;
    variant: LabelVariant;
  };
  theme?: any;
  [key: string]: any;
}
const Label = forwardRef<HTMLSpanElement, LabelProps>(
  ({ children, color = 'default', variant = 'soft', startIcon, endIcon, sx, ...other }, ref) => {
    const theme = useTheme();

    const iconStyle = {
      width: 16,
      height: 16,
      '& svg, img': { width: 1, height: 1, objectFit: 'cover' },
    };

    return (
      <StyledLabel
        ref={ref}
        component="span"
        ownerState={{ color, variant }}
        sx={{
          ...(startIcon && { pl: 0.75 }),
          ...(endIcon && { pr: 0.75 }),
          ...sx,
        }}
        theme={theme}
        {...(other as StyledLabelProps)}
      >
        {startIcon && <Box sx={{ mr: 0.75, ...iconStyle }}> {startIcon} </Box>}

        {children}

        {endIcon && <Box sx={{ ml: 0.75, ...iconStyle }}> {endIcon} </Box>}
      </StyledLabel>
    );
  }
);

export default Label;
