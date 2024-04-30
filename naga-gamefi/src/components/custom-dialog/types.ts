// @mui
import { DialogActionsProps, DialogTitleProps } from '@mui/material';
import { DialogProps } from '@mui/material/Dialog';

// ----------------------------------------------------------------------

export type ConfirmDialogProps = Omit<DialogProps, 'title' | 'content'> & {
  title: React.ReactNode;
  titleProps?: DialogTitleProps;
  content?: React.ReactNode;
  action: React.ReactNode;
  actionProps?: DialogActionsProps;
  onClose: VoidFunction;
  closeButtonHidden?: boolean;
};
