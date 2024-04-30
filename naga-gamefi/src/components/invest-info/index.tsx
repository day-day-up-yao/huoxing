import { Box, Stack, Typography, Avatar } from '@mui/material';

export default ({ logsrc, investname, isStar }: any) => (
  <Stack direction="row" alignItems="center" gap="10px">
    <Avatar
      src={logsrc}
      sx={{
        width: '26px',
        height: '26px',
        border: '1px solid',
        borderColor: 'border',
      }}
    />
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <Typography variant="body1">{investname}</Typography>
      {!isStar && (
        <Box
          sx={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
          }}
        >
          *
        </Box>
      )}
    </Box>
  </Stack>
);
