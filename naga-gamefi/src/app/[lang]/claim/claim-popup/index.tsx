import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Context } from '../context';

const ClaimPopup = () => {
  const { t, data, isPC, popupState, onBtnClosePopupClick, onBtnViewClick } = useContext(Context);

  return (
    <Modal open={popupState.isShow}>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={({ palette }) => ({
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: isPC ? '440px' : 'auto',
          width: isPC ? '510px' : '360px',
          bgcolor: palette.background.paper,
          backgroundImage: `url(/images/bigimg/tasktipbg.png)`,
          backgroundSize: '100% 100%',
          borderRadius: '10px',
          boxShadow: 24,
          p: isPC ? '40px' : '32px',
        })}
      >
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={
            isPC
              ? {
                  position: 'absolute',
                  top: '40px',
                  right: '40px',
                  height: '40px',
                  width: '40px',
                  cursor: 'pointer',
                }
              : {
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  height: '40px',
                  width: '40px',
                  cursor: 'pointer',
                }
          }
          onClick={() => onBtnClosePopupClick()}
        >
          <Box width="22px" height="22px">
            <img src="/images/icon/closeicon.webp" alt="" />
          </Box>
        </Stack>
        {popupState.type === 1 && (
          <Box
            sx={
              isPC
                ? { mb: '32px', width: '180px', height: '180px' }
                : { mb: '24px', width: '140px', height: '140px' }
            }
          >
            <img src={`${data.prizeData.mintImg}${popupState.tokenId}.png`} alt="" />
          </Box>
        )}
        {popupState.type === 2 && (
          <Box width="56px" height="56px" sx={{ mb: '32px' }}>
            <img src="/images/bigimg/tasktip.png" alt="" />
          </Box>
        )}
        <Typography
          sx={
            isPC
              ? {
                  fontSize: '16px',
                  lineHeight: '26px',
                  whiteSpace: 'pre',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }
              : {
                  fontSize: '14px',
                  lineHeight: '20px',
                  whiteSpace: 'pre',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }
          }
        >
          {t(popupState.text)}
        </Typography>
        <Box sx={isPC ? { mt: '40px' } : { mt: '32px' }}>
          <Button
            variant="contained"
            color="error"
            sx={
              isPC
                ? {
                    minWidth: '192px',
                    minHeight: '50px',
                    borderRadius: '5px',
                    fontSize: '16px',
                  }
                : {
                    minWidth: '165px',
                    minHeight: '44px',
                    borderRadius: '5px',
                    fontSize: '14px',
                  }
            }
            onClick={() => onBtnViewClick()}
          >
            {t('claim_btn_popup')}
          </Button>
        </Box>
      </Stack>
    </Modal>
  );
};

export default ClaimPopup;
