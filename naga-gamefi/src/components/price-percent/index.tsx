import React from 'react';
import { Avatar, Stack, Typography } from '@mui/material';
import SvgIcon from 'src/components/svg-icon';

const PricePercent = (props: any) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, react/prop-types
  const { coinIconUrl, symbol, price, change24h, isother, h5other } = props;
  return (
    <Stack
      direction="row"
      alignItems="center"
      gap="6px"
      sx={{ mt: isother || h5other ? '' : '12px' }}
    >
      {coinIconUrl && (
        <Avatar
          src={coinIconUrl}
          sx={{ bgcolor: 'background.neutral', width: '20px', height: '20px' }}
        />
      )}
      {symbol && (
        <Typography variant="caption" sx={{ lineHeight: '20px', fontWeight: 'bold' }}>
          {symbol}
        </Typography>
      )}

      {price && (
        <Typography
          variant={isother ? 'body2' : h5other ? 'body2' : 'caption'}
          sx={{ lineHeight: '20px', fontWeight: 'bold' }}
        >{`$ ${Number(price).toFixed(3)}`}</Typography>
      )}
      {change24h && Number(change24h) !== 0 && (
        <SvgIcon
          isGreen={Number(change24h) > 0}
          isRed={Number(change24h) < 0}
          name={Number(change24h) > 0 ? 'pointup' : 'pointdown'}
        />
      )}
      {change24h && (
        <Typography
          variant={isother ? 'body1' : h5other ? 'body2' : 'caption'}
          sx={{
            lineHeight: '20px',
            fontWeight: 'bold',
            color: Number(change24h) > 0 ? '#15BD44' : '#E60000',
          }}
        >
          {(
            Number(change24h >= 0 ? change24h : change24h.toString().replace('-', '')) * 100
          ).toFixed(2)}
          %
        </Typography>
      )}
    </Stack>
  );
};

export default PricePercent;
