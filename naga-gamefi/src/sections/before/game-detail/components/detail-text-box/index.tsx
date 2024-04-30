import React, { useMemo, useContext } from 'react';
import { Box, Avatar, Stack, Typography, Button } from '@mui/material';

import SvgIcon from 'src/components/svg-icon';
import { Context } from '../../context';

export default () => {
  const { detail, joinbtn, handleJoinGame, t } = useContext(Context);
  //   const url =
  const imgurl =
    detail?.adverUrl ||
    detail?.coverUrl ||
    (detail?.picUrl && detail?.picUrl !== '[]' && JSON.parse(detail?.picUrl)[0]);

  const joinBtnDom = useMemo(
    () => (
      <Button
        variant="outlined"
        disableFocusRipple
        disableElevation
        sx={{
          bgcolor: '#E60000',
          width: '100%',
          height: 44,
          lineHeight: 44 / 8,
          mt: 24 / 8,
          color: '#fff',
        }}
        onClick={handleJoinGame}
      >
        {t('game_detail_rank_join')}
      </Button>
    ),
    [handleJoinGame, t]
  );

  const oldBtnDom = useMemo(
    () => (
      <Box
        sx={{
          mt: 24 / 8,
        }}
      >
        <Button
          variant="outlined"
          disableFocusRipple
          disableElevation
          sx={{
            bgcolor: 'rgba(159,172,191,0.1)',
            width: '100%',
            height: 44,
            lineHeight: 44 / 8,
            color: '#fff',
          }}
        >
          <SvgIcon className="game-detail-data-item-icon" name="newverifyicon" notmouse />
          <Typography variant="body2" sx={{ ml: 6 / 8, fontWeight: 'bold' }}>
            Verify
          </Typography>
        </Button>
        <Typography
          variant="caption"
          sx={{ mt: 10 / 8, lineHeight: 20 / 8, textAlign: 'center', color: '#9FACBF' }}
        >
          I am the game project party, apply for verification
        </Typography>
      </Box>
    ),
    []
  );
  return (
    <Box
      sx={{
        px: 3,
        py: 36 / 8,
        position: 'relative',
        bgcolor: '#23252B',
      }}
    >
      <Avatar
        variant="rounded"
        sx={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          borderRadius: 0,
          filter: 'blur(10px)',
          opacity: 0.4,
        }}
        src={imgurl}
      />
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Avatar
          variant="rounded"
          sx={{
            width: 82,
            height: 82,
            borderRadius: 5 / 8,
          }}
          src={imgurl}
        />
        <Typography variant="h4" sx={{ my: 20 / 8 }}>
          {detail?.name}
        </Typography>
        <Typography variant="body2" sx={{ color: '#9FACBF', textAlign: 'center' }}>
          {detail?.brief}
        </Typography>
        {joinbtn && joinBtnDom}
        {/* {oldBtnDom} */}
      </Stack>
    </Box>
  );
};
