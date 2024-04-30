'use client';

import { useMemo, useState } from 'react';
import { Modal, Box, Avatar, Typography, Button } from '@mui/material';

// import { AcceptGuildInvite } from 'src/fetchs/common.ts';

const GuildInvite = () => {
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 508,
    bgcolor: 'background.paper',
    p: 5,
  };
  return (
    <Modal open>
      <Box sx={style}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img style={{ width: '120px' }} src="/images/bigimg/contentimg.png" alt="" />
          <Typography
            sx={{
              mt: 3,
            }}
            variant="h4"
          >
            The Immortal Game
          </Typography>
          <Typography
            sx={{
              my: 3,
            }}
            variant="body2"
          >
            lechatpour 邀請你加入 游戏名称
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: 'red',
              color: '#fff',
              width: 205,
              '&:hover': {
                bgcolor: 'red',
              },
            }}
            // onClick={() => TocopyText(invitelink, t)}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default GuildInvite;
