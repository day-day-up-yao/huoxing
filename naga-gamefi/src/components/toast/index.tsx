import { Id, toast as toastify, ToastOptions } from 'react-toastify';
import dynamic from 'next/dynamic';

const alertStyles = { marginBottom: '12px' };
const MuiAlert = dynamic(() => import('@mui/material/Alert'), { ssr: false });
const muiToast = {
  success: (msg: string, toastOptions?: ToastOptions): Id =>
    toastify.success(
      ({ toastProps, closeToast, ...props }) => (
        <MuiAlert sx={alertStyles} elevation={6} severity="success" {...props}>
          {msg}
        </MuiAlert>
      ),
      toastOptions
    ),
  info: (msg: string, toastOptions?: ToastOptions): Id =>
    toastify.info(
      ({ toastProps, closeToast, ...props }) => (
        <MuiAlert sx={alertStyles} elevation={6} severity="info" {...props}>
          {msg}
        </MuiAlert>
      ),
      toastOptions
    ),
  warning: (msg: string, toastOptions?: ToastOptions): Id =>
    toastify.warning(
      ({ toastProps, closeToast, ...props }) => (
        <MuiAlert sx={alertStyles} elevation={6} severity="warning" {...props}>
          {msg}
        </MuiAlert>
      ),
      toastOptions
    ),
  error: (msg: string, toastOptions?: ToastOptions): Id =>
    toastify.error(
      ({ toastProps, closeToast, ...props }) => (
        <MuiAlert sx={alertStyles} elevation={6} severity="error" {...props}>
          {msg}
        </MuiAlert>
      ),
      toastOptions
    ),
};

export { muiToast as toast };
