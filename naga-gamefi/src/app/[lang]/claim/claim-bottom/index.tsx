import React, { useContext, useMemo } from 'react';

import { Stack, Typography } from '@mui/material';
import { Context } from '../context';
import ActivityLineTitleDom from '../../activity/_components/activity-line-title';
import ActivityBoxDom from '../../activity/_components/activity-box';

const ClaimBottom = () => {
  const { t, data, isPC } = useContext(Context);

  const titleDom = useMemo(
    () => <ActivityLineTitleDom title={t(data.expData.title)} windowShowType={isPC ? 1 : 2} />,
    [data.expData.title, isPC, t]
  );

  const contextDom = useMemo(
    () => (
      <ActivityBoxDom bgImg={isPC ? data.expData.bgImg : data.expData.bgImgH5} windowShowType={1}>
        <Stack
          width="100%"
          height="74px"
          direction="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="16px"
          sx={isPC ? { p: '20px' } : { p: '0' }}
        >
          <Typography sx={isPC ? {} : { fontSize: '12px' }}>{t(data.expData.text)}</Typography>
        </Stack>
      </ActivityBoxDom>
    ),
    [data.expData.bgImg, data.expData.bgImgH5, data.expData.text, isPC, t]
  );

  return (
    <Stack sx={isPC ? { m: '15px 0 140px' } : { m: '0 0 126px' }}>
      {titleDom}
      {contextDom}
    </Stack>
  );
};

export default ClaimBottom;
