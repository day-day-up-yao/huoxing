import { useState, useMemo, useContext } from 'react';
import { Stack, Typography, Box, Button, Modal } from '@mui/material';
import { Theme, useTheme } from '@mui/system';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import SvgIcon from 'src/components/svg-icon';
import Pagination from 'src/components/before/pagination';
import { NoData } from 'src/components/no-data';
import { formattingNum } from 'src/utils/public';
import { Context } from '../context';

export default () => {
  const {
    isPc,
    votelistinfo,
    getPageCurry,
    handleBtnSort,
    sorttype,
    popupInfo,
    votepopup,
    t,
    pages,
    handleSearchVote,
    handleClose,
    handleVoteBtn,
    linkTo,
    voteedid,
  } = useContext(Context);
  const { palette } = useTheme<Theme>();
  // const [btntype, setBtntype] = useState<number>(0); // 0首字母排序 1票数排序
  const btnsort = [t('vote_a_z_screen'), t('vote_number_screen')];
  // const [votepopup, setVotepopup] = useState<boolean>(false);
  const [searflag, setSearflag] = useState(false);

  // search
  const searchDom = useMemo(
    () => (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          width: { xs: '100%', sm: '320px' },
          padding: '12px',
          bgcolor: '#23252B',
          borderRadius: '5px',
        }}
      >
        <SvgIcon name="search-2" />
        <input
          type="text"
          placeholder={t('search_title')}
          style={{
            paddingLeft: '10px',
            background: '#23252B',
            border: 'none',
            width: '80%',
            height: '100%',
            color: '#fff',
          }}
          onChange={(e) => {
            handleSearchVote(e.target.value);
          }}
        />
      </Stack>
    ),
    [handleSearchVote, t]
  );

  const h5SearchBtn = useMemo(
    () => (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          bgcolor: '#23252B',
          px: '9px',
          borderRadius: '5px',
        }}
        onClick={() => setSearflag(true)}
      >
        <SvgIcon name="search-2" />
      </Stack>
    ),
    []
  );

  // 弹窗 投票成功 次数用完
  const ModelPopup = useMemo(
    () => (
      <Modal open={votepopup}>
        <Box
          sx={{
            width: '340px',
            padding: '40px 0',
            position: 'absolute' as 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            p: 5,
            borderRadius: '10px',
          }}
        >
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '28px',
              right: '28px',
              cursor: 'pointer',
            }}
          >
            <CloseTwoToneIcon color="action" onClick={() => handleClose()} />
          </Box>
          <Stack direction="row" flexDirection="column" alignItems="center">
            {popupInfo.imgages !== '' && (
              <img
                style={{
                  width: '182px',
                  height: '138px',
                }}
                src={popupInfo.imgages}
                alt=""
              />
            )}

            <Typography
              sx={{
                my: '24px',
                fontSize: { xs: '16px', sm: '20px' },
                textAlign: 'center',
              }}
              variant="h4"
            >
              {popupInfo.text}
            </Typography>
            {popupInfo.imgages !== '' && (
              <Button
                sx={{
                  width: '205px',
                  height: '44px',
                  bgcolor: '#fff',
                  color: '#23252B',
                  '&:hover': {
                    bgcolor: '#fff',
                    color: '#23252B',
                  },
                }}
                onClick={() => handleClose()}
              >
                {t('game_detail_join_confirm')}
              </Button>
            )}
          </Stack>
        </Box>
      </Modal>
    ),
    [handleClose, popupInfo.imgages, popupInfo.text, t, votepopup]
  );
  return (
    <Box>
      <Box id="votetop1" />
      <Box id="votetop2" />
      {!searflag ? (
        <Stack direction="row" justifyContent="space-between">
          <Stack
            direction="row"
            sx={({ palette }) => ({
              borderRadius: '5px',
              bgcolor: palette.background.paper,
            })}
          >
            {btnsort.map((item: string, index: number) => (
              <Button
                sx={{
                  padding: '10px 24px',
                  bgcolor: sorttype - 1 === index ? '#FFC24B' : '',
                  color: sorttype - 1 === index ? palette.grey[800] : '',
                  '&:hover': {
                    opacity: 1,
                    bgcolor: sorttype - 1 === index ? '#FFC24B' : '',
                  },
                }}
                key={index}
                onClick={() => {
                  handleBtnSort(index + 1);
                }}
              >
                {item}
              </Button>
            ))}
          </Stack>
          {isPc ? searchDom : h5SearchBtn}
        </Stack>
      ) : (
        searchDom
      )}
      {/* 投票列表 */}
      <Stack direction="row" gap="1.6%" mt={{ xs: '12px', sm: '32px' }} flexWrap="wrap">
        {votelistinfo?.inforList.length > 0 ? (
          votelistinfo?.inforList?.map((item: any, index: any) => {
            const piaonum = item.voteNum;
            return (
              <Box
                key={index}
                sx={({ palette }) => ({
                  width: { xs: '49%', sm: '18.7%' },
                  bgcolor: palette.background.paper,
                  borderRadius: '5px',
                  mt: '24px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                })}
                onClick={() => linkTo(`/game/${item?.gameId}`)}
              >
                <Box
                  sx={{
                    height: { xs: '115px', sm: '151px' },
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box
                    sx={{
                      height: '100%',
                      background: `url(${item?.coverUrl})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.06)',
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    padding: { xs: '12px', sm: '20px' },
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      fontSize: { xs: '14px', sm: '20px' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    mt="8px"
                    sx={{
                      fontSize: { xs: '12px', sm: '' },
                      height: { xs: '35px', sm: '44px' },
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {item?.gameBrief}
                  </Typography>
                  {isPc && (
                    <Stack
                      direction="row"
                      mt="25px"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box
                        sx={{
                          position: 'relative',
                          width: '80%',
                          height: '5px',
                          borderRadius: '3px',
                          bgcolor: '#3D3D3D',
                        }}
                      >
                        <Box
                          sx={{
                            position: 'absolate',
                            top: 0,
                            left: 0,
                            width:
                              item.voteNum !== 0
                                ? `${
                                    parseFloat(
                                      (Number(item.voteNum / item.voteTotal) * 100).toFixed(2)
                                    ) > 10
                                      ? (Number(item.voteNum / item.voteTotal) * 100).toFixed(0)
                                      : 10
                                  }%`
                                : 0,
                            height: '5px',
                            borderRadius: '3px',
                            bgcolor: '#FFC24B',
                          }}
                        />
                      </Box>
                      <Typography variant="body2" color="#93A7B5">
                        {item.voteNum !== 0
                          ? `${
                              parseFloat(
                                (Number(item.voteNum / item.voteTotal) * 100).toFixed(2)
                              ) >= 10
                                ? (Number(item.voteNum / item.voteTotal) * 100).toFixed(0)
                                : (Number(item.voteNum / item.voteTotal) * 100).toFixed(1)
                            }%`
                          : '0%'}
                      </Typography>
                    </Stack>
                  )}

                  <Stack
                    direction="row"
                    alignItems="center"
                    mt={{ xs: '8px', sm: '20px' }}
                    justifyContent="space-between"
                    flexDirection={{ xs: 'column', sm: 'row' }}
                  >
                    <Stack gap="4px" direction="row" color="#FFC24B" alignItems="baseline">
                      <Typography variant="h5">{formattingNum(piaonum, false, 0, true)}</Typography>
                      <Typography variant="body2" fontWeight="bold">
                        {t('vote_number')}
                      </Typography>
                    </Stack>
                    <Box
                      sx={{
                        background:
                          item.voted === 1
                            ? 'url(/images/bigimg/voteed.png)'
                            : 'url(/images/bigimg/voting.png)',
                        backgroundSize: '100%',
                        width: { xs: '100%', sm: '92px' },
                        height: '30px',
                        mt: isPc ? '' : '11px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: item.voted === 1 ? '#CBD9E1' : '#5F4205',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        cursor: 'pointer',
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleVoteBtn(item);
                        // setVotepopup(true);
                      }}
                    >
                      {item.voted === 1 ? t('vote_ed') : t('vote_ing')}
                    </Box>
                  </Stack>
                </Box>
              </Box>
            );
          })
        ) : (
          <NoData style={{ minHeight: '500px' }} />
        )}
      </Stack>
      {votelistinfo?.recordCount > 20 && (
        <Box mt="40px">
          <Pagination
            totalData={votelistinfo?.recordCount}
            pageSize={40}
            pageChange={(curPage: any) => {
              getPageCurry(curPage);
              window.location.hash = `#votetop${curPage}`;
            }}
            prevTxt={<img src="/images/icon/prepage.png" alt="" />}
            nextTxt={<img src="/images/icon/nextpage.png" alt="" />}
          />
        </Box>
      )}
      {ModelPopup}
    </Box>
  );
};
