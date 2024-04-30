/* eslint-disable react/prop-types */
import React, { useMemo, useState, useCallback, useContext } from 'react';
import {
  Box,
  Stack,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
  Modal,
  Link,
  Avatar,
} from '@mui/material';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import NotData from 'src/components/before/not-data';

import RewardNum from '../../../components/reward-num';
import { Context } from '../../../context';

export default (props: any) => {
  // eslint-disable-next-line react/prop-types
  const { title, alllist, type } = props;
  const { guilddetailinfo, getGuildRankDetail, handleModalOpen, handleTOJoinguild, t } =
    useContext(Context);

  const [rankopen, setRankopen] = useState(false);
  const [isitem, setIsitem] = useState(false);

  const handleRankPopup = () => {
    setRankopen(true);
    setIsitem(false);
  };

  const handleRankClose = () => {
    setRankopen(false);
    setIsitem(false);
  };

  // item点击
  const handleItemClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-shadow
    (type: any, id: any) => {
      if (isitem) return;
      if (type === 'guild') {
        getGuildRankDetail(id);
        setRankopen(true);
        setIsitem(true);
      }
    },
    [getGuildRankDetail, isitem]
  );

  // console.log(guilddetailinfo);

  // 工会详情信息

  const guilddetailDom = useMemo(() => {
    const address = guilddetailinfo?.address
      ? `${guilddetailinfo?.address?.slice(0, 5)}...${guilddetailinfo?.address?.slice(-4)}`
      : '';
    return (
      <Box>
        <Stack direction="row" alignItems="center">
          <Avatar src={guilddetailinfo?.iconUrl} />
          <Typography sx={{ ml: 2 }}>{address}</Typography>
        </Stack>
        <Box sx={{ py: 26 / 8, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">{t('game_detail_top_info_energy')}</Typography>
            <RewardNum starnum={guilddetailinfo?.bonus} />
          </Stack>
          <Stack
            direction="row"
            sx={{ my: 35 / 8 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1">Rank</Typography>
            <Typography variant="body1">
              {guilddetailinfo?.rank ? guilddetailinfo?.rank : '--'}
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="body1">{t('game_detail_rank_reward')}</Typography>
            <Typography variant="body1">+10%</Typography>
          </Stack>
        </Box>
      </Box>
    );
  }, [
    guilddetailinfo?.address,
    guilddetailinfo?.bonus,
    guilddetailinfo?.iconUrl,
    guilddetailinfo?.rank,
    t,
  ]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const goodrankimg = [
    '/images/icon/firsticon.png',
    '/images/icon/secondicon.png',
    '/images/icon/thendicon.png',
  ];

  // 能量/工会列表
  const allListDom = useCallback(
    (ranklist: any, isAitem?: any) => (
      <List sx={{ mt: 3 }}>
        {ranklist?.length > 0 ? (
          ranklist?.map((item: any, index: any) => {
            const avatimg = isAitem || type !== 'guild' ? item.userAvatarUrl : item?.iconUrl;
            const address = item?.address
              ? `${item?.address?.slice(0, 7)}...${item?.address?.slice(-6)}`
              : '--';
            const bonus = item?.bonus;
            let memberNum = `${item?.memberNum}${t('game_detail_rank_number')}`;
            let percent = '+10%';
            if (type !== 'guild' || isAitem) {
              percent = '';
              memberNum = '';
            }
            return (
              <ListItem
                secondaryAction={<RewardNum starnum={bonus} updown={percent} />}
                key={index}
                onClick={() => handleItemClick(type, item.id)}
                sx={[
                  {
                    '&:hover': {
                      bgcolor: type === 'guild' ? '#2E3036' : '',
                    },
                  },
                  {
                    borderRadius: 5 / 8,
                    cursor: type === 'guild' ? 'pointer' : '',
                  },
                ]}
              >
                {index < 3 ? (
                  <Avatar sx={{ width: 34, height: 34, mr: 1 }} src={goodrankimg[index]} />
                ) : (
                  <Typography
                    variant="body2"
                    sx={{
                      width: 34,
                      height: 34,
                      textAlign: 'center',
                      lineHeight: 20 / 8,
                      mr: 1,
                      color: '#9FACBF',
                    }}
                  >
                    {index + 1}
                  </Typography>
                )}
                <ListItemAvatar>
                  <Avatar src={avatimg} />
                </ListItemAvatar>
                <ListItemText
                  primary={address}
                  secondary={
                    type === 'guild' ? (
                      <Typography variant="caption" sx={{ color: '#9FACBF' }}>
                        {memberNum}
                      </Typography>
                    ) : (
                      <div />
                    )
                  }
                />
              </ListItem>
            );
          })
        ) : (
          <NotData />
        )}
      </List>
    ),
    [goodrankimg, handleItemClick, t, type]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 508,
    bgcolor: 'background.paper',
    p: 5,
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closestyle = {
    position: 'absolute' as 'absolute',
    top: '5%',
    right: '7%',
    cursor: 'pointer',
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const joinbtnstyle = {
    position: 'absolute' as 'absolute',
    bottom: '2%',
    left: '10%',
    cursor: 'pointer',
    width: '80%',
    height: '44px',
    bgcolor: '#E60000',
    color: '#fff',
    '&:hover': {
      bgcolor: '#E60000',
    },
  };

  // 弹窗信息
  const listPopupDom = useMemo(() => {
    let popuplist = [];
    let isAitm = false;
    if (isitem) {
      popuplist = guilddetailinfo?.memberList;
      isAitm = true;
    } else {
      popuplist = alllist;
    }
    return (
      <Modal open={rankopen} onClose={handleRankClose} aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Box sx={closestyle} onClick={handleRankClose}>
            <CloseTwoToneIcon color="action" />
          </Box>
          <Box>
            {isitem ? (
              guilddetailDom
            ) : (
              <Stack direction="row">
                <Typography variant="h4">{title}</Typography>
              </Stack>
            )}
            <Box sx={{ maxHeight: '500px', overflowY: 'auto' }}>
              {allListDom(popuplist, isAitm)}
            </Box>
            {isitem && (
              <Button
                variant="contained"
                sx={joinbtnstyle}
                onClick={() => handleTOJoinguild(guilddetailinfo?.id)}
              >
                {t('game_detail_rank_join')}
              </Button>
            )}
          </Box>
        </Box>
      </Modal>
    );
  }, [
    isitem,
    rankopen,
    style,
    closestyle,
    guilddetailDom,
    title,
    allListDom,
    joinbtnstyle,
    t,
    guilddetailinfo?.memberList,
    guilddetailinfo?.id,
    alllist,
    handleTOJoinguild,
  ]);

  return (
    <Box
      sx={{
        mb: 3,
        py: 4,
        px: 3,
        bgcolor: '#23252b',
        borderRadius: 0.5,
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h4">{title}</Typography>
        {type === 'guild' && (
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              border: '1px solid #fff',
            }}
            onClick={() => handleModalOpen('create')}
          >
            {t('game_detail_rank_create')}
          </Button>
        )}
      </Stack>
      {allListDom(alllist?.slice(0, 5))}
      {alllist?.length > 5 && (
        <Link component="button" sx={{ color: '#fff' }} onClick={handleRankPopup}>
          {t('game_detail_rank_more')}
        </Link>
      )}

      {listPopupDom}
    </Box>
  );
};
