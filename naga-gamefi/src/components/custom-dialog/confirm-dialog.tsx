// @mui
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//
import { IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ConfirmDialogProps } from './types';

// ----------------------------------------------------------------------

export default function ConfirmDialog({
  title,
  titleProps,
  content,
  action,
  actionProps,
  open,
  onClose,
  closeButtonHidden,
  ...other
}: ConfirmDialogProps) {
  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={onClose}
      {...other}
      sx={{
        ...other.sx,
        '& .MuiPaper-root': {
          borderRadius: '10px',
        },
      }}
    >
      {!closeButtonHidden && (
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: { xs: '10px', sm: '36px' },
            top: { xs: '14px', sm: '24px' },
            padding: '0',
          }}
        >
          <CloseOutlinedIcon />
        </IconButton>
      )}

      <DialogTitle
        {...titleProps}
        sx={{ ...titleProps?.sx, padding: { xs: '12px 12px', sm: '40px 40px 20px' } }}
      >
        {title}
      </DialogTitle>

      {content && (
        <DialogContent
          sx={{ typography: 'body1', padding: { xs: '12px 12px 0', sm: '40px 40px 0' } }}
        >
          {content}
        </DialogContent>
      )}

      <DialogActions
        {...actionProps}
        sx={{ ...actionProps?.sx, padding: { xs: '6px 12px 12px', sm: '20px 40px 40px' } }}
      >
        {action}

        {/* <Button variant="outlined" color="inherit" onClick={onClose}>
          Cancel
        </Button> */}
      </DialogActions>
    </Dialog>
  );
}
