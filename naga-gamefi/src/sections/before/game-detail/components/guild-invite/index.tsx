/* eslint-disable jsx-a11y/alt-text */

'use client';

import { useMemo, useContext, useRef } from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import { TocopyText } from 'src/utils/public';
import { Context } from '../../context';

const GuildInvite = () => {
  const {
    detail,
    inviteinfo,
    handleModalClose,
    handleConfirm,
    invitlinkinfo,
    invitelink,
    t,
    invitmodel,
  } = useContext(Context);
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 508,
    bgcolor: 'background.paper',
    p: 5,
    borderRadius: '10px',
  };

  const closestyle = {
    position: 'absolute' as 'absolute',
    top: '5%',
    right: '7%',
    cursor: 'pointer',
  };

  // 邀请确认弹窗
  const confirmDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img style={{ width: '120px', height: '120px' }} src={detail.iconUrl} />
        <Typography
          sx={{
            mt: 3,
          }}
          variant="h4"
        >
          {detail.name}
        </Typography>
        <Typography
          sx={{
            my: 3,
          }}
          variant="body2"
        >
          <span style={{ color: '#E60000', paddingRight: '8px' }}>{inviteinfo.name}</span>
          {t('game_detail_join_text')} {detail.name}
        </Typography>
        <Button
          variant="contained"
          onClick={handleConfirm}
          sx={{
            bgcolor: 'red',
            color: '#fff',
            width: 205,
            '&:hover': {
              bgcolor: 'red',
            },
          }}
        >
          {t('game_detail_join_confirm')}
        </Button>
      </Box>
    ),
    [detail.iconUrl, detail.name, handleConfirm, inviteinfo.name, t]
  );

  // 复制邀请链接弹窗
  const modalRef = useRef<HTMLButtonElement | null>(null);
  const invitLinkDom = useMemo(
    () => (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4">{invitlinkinfo.title}</Typography>
        <Typography variant="body2" sx={{ margin: 3 }}>
          {invitlinkinfo.desc}
        </Typography>
        <Button
          ref={modalRef}
          id="copyaddress"
          variant="contained"
          sx={{
            bgcolor: 'red',
            color: '#fff',
            width: 205,
            '&:hover': {
              bgcolor: 'red',
            },
          }}
          onClick={() => TocopyText(invitelink, t, modalRef)}
        >
          {t('game_detail_copy_link')}
        </Button>
      </Box>
    ),
    [invitlinkinfo.title, invitlinkinfo.desc, invitelink, t]
  );

  return (
    <Modal open={invitmodel.isopen}>
      <Box sx={style}>
        <Box sx={closestyle} onClick={handleModalClose}>
          <CloseTwoToneIcon color="action" />
        </Box>
        {invitmodel.type === 'islink' ? invitLinkDom : confirmDom}
      </Box>
    </Modal>
  );
};

export default GuildInvite;
