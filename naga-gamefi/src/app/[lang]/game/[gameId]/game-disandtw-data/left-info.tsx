import { Stack, Box, Typography } from '@mui/material';

import SvgIcon from 'src/components/svg-icon';
import { formatNum } from 'src/utils/public/index';

type LeftDataProps = {
  svgname: string;
  title: string;
  price: number;
  percent: number;
};

export default (props: LeftDataProps) => {
  const { svgname, title, price, percent } = props;

  return (
    <Box>
      <Stack direction="row">
        <SvgIcon name={svgname} />
        <Typography ml="8px" variant="h5">
          {title}
        </Typography>
      </Stack>
      <Typography mt="8px" variant="body1" fontWeight="bold">
        {formatNum(price)}
      </Typography>
      <Stack direction="row" mt="8px" alignItems="center">
        <SvgIcon
          isGreen={Number(percent) > 0}
          isRed={Number(percent) < 0}
          name={Number(percent) > 0 ? 'pointup' : 'pointdown'}
        />
        <Typography
          sx={{
            color: Number(percent) > 0 ? '#15BD44' : '#E60000',
          }}
          ml="6px"
          variant="body1"
          fontWeight="bold"
        >
          {(Number(Math.abs(percent) / (price - percent)) * 100).toFixed(2)} %
        </Typography>
      </Stack>
    </Box>
  );
};
