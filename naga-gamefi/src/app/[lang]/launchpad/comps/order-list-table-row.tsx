import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { useMemo } from 'react';
import { Box } from '@mui/system';
import { Stack, Typography } from '@mui/material';
import Avatar from 'src/components/before/avatar';
import GamePriceBox from 'src/components/game-price-box';
import { oneLineTextOverflow } from 'src/utils/styles';

type Props = {
  row: OrderListItem;
};

export default function LaunchpadTableRow({ row }: Props) {
  const cellCommonStyle = useMemo(
    () => ({
      height: '70px',
      padding: { xs: '12px 8px !important', sm: '12px 24px !important' },
      textAlign: 'right',
    }),
    []
  );
  const { iconUrl, name, totalRaise, itemPrice, platform, tokenPrice, tokenSymbol } = row;
  return (
    <TableRow hover>
      <TableCell sx={{ ...cellCommonStyle, minWidth: '300px' }}>
        <Stack flexDirection="row" alignItems="center" sx={{ textAlign: 'left' }}>
          <Box
            height="70px"
            width="70px"
            sx={({ palette }) => ({
              background: palette.background.neutral,
              borderRadius: '7px',
              border: '1px solid',
              borderColor: 'divider',
              marginRight: '24px',
            })}
          >
            <Avatar src={iconUrl} variant="square" height="100%" width="100%" />
          </Box>
          <Typography
            variant="subtitle1"
            sx={{
              textTransform: 'capitalize',
              marginRight: '12px',
              maxWidth: 'calc(100% - 180px)',
              ...oneLineTextOverflow,
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={({ palette }) => ({ textTransform: 'uppercase', color: palette.text.secondary })}
          >
            {tokenSymbol}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell sx={{ ...cellCommonStyle }}>
        <Typography variant="subtitle1">ath-roi</Typography>
      </TableCell>
      <TableCell sx={{ ...cellCommonStyle }}>
        {tokenPrice ? <GamePriceBox price={tokenPrice} fontWeight="bold" /> : '--'}
      </TableCell>
      <TableCell sx={{ ...cellCommonStyle }}>
        {itemPrice ? <GamePriceBox price={itemPrice} fontWeight="bold" /> : '--'}
      </TableCell>
      <TableCell sx={{ ...cellCommonStyle }}>
        {totalRaise ? <GamePriceBox price={totalRaise} fontWeight="bold" /> : '--'}
      </TableCell>
      <TableCell sx={{ ...cellCommonStyle }}>
        <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
          {platform}
        </Typography>
      </TableCell>
    </TableRow>
  );
}
