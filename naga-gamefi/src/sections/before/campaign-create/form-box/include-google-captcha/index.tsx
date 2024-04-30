import { forwardRef, useMemo } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import TextField from '../../components/text-field';

const GoogleCaptcha = forwardRef((props: any, ref) => {
  const { t, value = false, onChange } = props;

  return (
    <FormControlLabel
      control={
        <Checkbox
          value={value}
          onChange={(event, value) => {
            onChange(value);
          }}
        />
      }
      label={t('campaign_create_task_include_google_captcha')}
    />
  );
});

const IncludeGoogleCaptcha = (props: any) => {
  const { t, show } = props;

  const addTaskDom = useMemo(
    () => <TextField name="googleCaptcha" accepter={GoogleCaptcha} t={t} labelFirst />,
    [t]
  );

  return <Box sx={{ marginTop: '-20px', display: show ? 'flex' : 'none' }}>{addTaskDom}</Box>;
};

export default IncludeGoogleCaptcha;
