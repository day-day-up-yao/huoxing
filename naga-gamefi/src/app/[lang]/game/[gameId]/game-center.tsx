import {
  Grid,
  Box,
  Stack,
  Typography,
  Button,
  Modal,
  Tabs,
  Tab,
  Avatar,
  Skeleton,
} from '@mui/material';
import { useMemo, useContext, useCallback, useState } from 'react';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import anchorme from 'anchorme';
import dayjs from 'dayjs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination, Scrollbar, Thumbs } from 'swiper/modules';
import { useReactPlayer } from 'src/utils/hooks/use-react-player';
import TitleCurreny from 'src/components/title-currency';
import { formattingNum } from 'src/utils/public/index';
import PricePercent from 'src/components/price-percent';

import 'swiper/scss';
import 'node_modules/swiper/modules/effect-fade.scss';
import 'node_modules/swiper/modules/pagination.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import SvgIcon from 'src/components/svg-icon';
import NotData from 'src/components/before/not-data';

import { Context } from '../context';
import GameNftDom from './game-nft-dom';
import GameDisTwData from './game-disandtw-data';
import GameReviews from './game-reviews';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 508,
  bgcolor: 'background.paper',
  p: 5,
  maxHeight: '600px',
  overflowY: 'auto',
};

const closestyle = {
  position: 'absolute' as 'absolute',
  top: '28px',
  right: '40px',
  cursor: 'pointer',
};

export default () => {
  const {
    gamedetailData,
    allgameData,
    isDark,
    detailbigimg,
    t,
    smUp,
    getNewYears,
    linkTo,
    handleNext,
    handlePrv,
    handleMoreBtn,
    isBrief,
    handleInvestItem,
    investnameList,
    investInfoList,
    getTaskTimeType,
    handleFinaBtn,
    handleOpenModal,
    modaltype,
    handleCloseModal,
    handleToTaskdetail,
    finastatus,
    GamedetailUrl,
    getSupportPlatform,
  } = useContext(Context);
  const { player } = useReactPlayer();

  const [tabvalue, setTabvalue] = useState(0);

  const [actype, setActype] = useState(0);

  const gameDetailTitle = (title: string) => <Typography variant="h4">{title}</Typography>;

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabvalue(newValue);
  };

  // console.log(gamedetailData);

  // 游戏详情图片/视频
  const gamePicture = useMemo(
    () => (
      <Swiper
        modules={[Autoplay, Navigation, Scrollbar]}
        slidesPerView={4}
        spaceBetween={10}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        {GamedetailUrl(gamedetailData)?.map((item: any, index: any) => {
          const isVideo = item?.constructor === Object;
          return (
            <SwiperSlide key={index}>
              <Box
                sx={{
                  // width: '257px',
                  height: '144px',
                  flexShrink: 0,
                }}
              >
                {isVideo ? (
                  <Box>{player(item.video, item.cover, false, true)}</Box>
                ) : (
                  <img
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                    onClick={() => handleOpenModal(2, item, index)}
                    src={item}
                    alt=""
                  />
                )}
              </Box>
            </SwiperSlide>
          );
        })}
        <Box
          className="swiper-button-prev"
          sx={{
            '&:after': {
              fontSize: '18px',
              color: '#fff',
            },
          }}
        />
        <Box
          className="swiper-button-next"
          sx={{
            '&:after': {
              fontSize: '18px',
              color: '#fff',
            },
          }}
        />
      </Swiper>
    ),
    [GamedetailUrl, gamedetailData, handleOpenModal, player]
  );

  const pictureSkeleton = useMemo(
    () => (
      <Stack direction="row" gap="10px" mb="40px">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} variant="rounded" width="24%" height="144px" />
        ))}
      </Stack>
    ),
    []
  );

  // 游戏详情描述
  const gameDesc = useMemo(
    () => (
      <Box
        mt="24px"
        sx={{
          position: 'relative',
        }}
      >
        <div
          style={{
            height: smUp ? (isBrief === 1 ? '340px' : 'auto') : 'auto',
            overflow: 'hidden',
          }}
          id="detail-desc"
          className="game-detail-introduction"
          dangerouslySetInnerHTML={{ __html: gamedetailData?.gameDesc }}
          // dangerouslySetInnerHTML={{
          //   __html: anchorme({
          //     input: gamedetailData?.gameDesc,
          //     options: {
          //       attributes: {
          //         target: '_blank',
          //       },
          //     },
          //   })?.replace(/(\r\n {4})/g, ''),
          // }}
        />
        <Box
          sx={{
            position: isBrief === 2 ? 'relative' : 'absolute',
            display: {
              xs: 'none',
              sm: isBrief !== 0 ? 'block' : 'none',
            },
            bottom: 0,
            width: '100%',
            height: isBrief === 2 ? '70px' : '130px',
            // background: 'linear-gradient( 180deg, rgba(24,25,29,0) 0%, #18191D 100%)',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                isBrief === 2
                  ? 'none'
                  : 'linear-gradient(180deg,var(--naga-gamelibrary-screen-show-bg) 0%,var(--naga-body) 60%,var(--naga-body) 100%)',
            }}
          >
            <Button
              sx={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                height: '54px',
                bgcolor: 'background.paper',
                '&:hover': {
                  bgcolor: 'background.paper',
                },
              }}
              onClick={handleMoreBtn}
            >
              {isBrief === 1 && t('public_more')}
              {isBrief === 2 && t('public_less')}
              <SvgIcon
                style={{
                  paddingLeft: '5px',
                }}
                name={isBrief === 1 ? 'line-pointdown' : 'line-pointup'}
              />
            </Button>
          </div>
        </Box>
      </Box>
    ),
    [gamedetailData?.gameDesc, handleMoreBtn, isBrief, smUp, t]
  );

  const IvestorLogoItem = useCallback(
    (info: any) => (
      <Box
        sx={{
          position: 'relative',
        }}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {info.orgIcon ? (
          <img
            style={{
              minHeight: '9px',
              maxHeight: '23px',
              filter: isDark ? 'invert(0.5)' : 'none',
              maxWidth: '110px',
            }}
            src={info.orgIcon}
            alt=""
          />
        ) : (
          <Typography
            variant="body2"
            sx={{
              maxWidth: '130px',
              color: isDark && 'text.secondary',
            }}
          >
            {info.orgName}
          </Typography>
        )}
        {!info.follower && (
          <Typography
            variant="body1"
            sx={{
              position: 'absolute',
              top: '-7px',
              right: '-8px',
              color: isDark && 'text.secondary',
            }}
          >
            *
          </Typography>
        )}
      </Box>
    ),
    [isDark]
  );

  // console.log(investnameList);

  // 游戏financing
  const financingDom = useMemo(
    () => (
      <Box mt="24px">
        <Stack direction="row" gap="10px">
          {investnameList.map((item: any, index: any) => (
            <Button
              key={index}
              sx={
                {
                  bgcolor: finastatus === item?.round ? 'primary.main' : 'background.paper',
                  color: finastatus === item?.round && '#fff',
                  padding: '10px 16px',
                  '&:hover': {
                    bgcolor: finastatus === item?.round ? 'primary.main' : 'background.paper',
                  },
                } as any
              }
              onClick={() => handleInvestItem(item?.round)}
            >
              {item?.showName}
            </Button>
          ))}
        </Stack>
        {investInfoList.map((item: any, index: any) => {
          if (item.followerPojoList.length > 0) {
            item.followerPojoList.map((fl: any) => {
              fl.follower = true;
            });
          }

          const haveicon = item.followerPojoList.filter((item: any) => item.orgIcon);
          const noticon = item.followerPojoList.filter((item: any) => !item.orgIcon);
          const investorlist = item.leaderPojoList.concat(haveicon?.concat(noticon));
          return (
            <Stack
              mt="24px"
              direction="row"
              padding="40px"
              key={index}
              sx={{
                bgcolor: 'background.paper',
                borderRadius: '5px',
              }}
            >
              <Box
                sx={{
                  pr: '80px',
                  borderRight: '1px solid',
                  borderColor: 'background.border',
                  flexShrink: 0,
                }}
              >
                <Stack direction="row">
                  <SvgIcon name="time" />
                  <Typography ml="8px" fontWeight="bold" variant="body2">
                    {dayjs(item.inverstDateStamp * 1000).format(t('time_years_mouth'))}
                  </Typography>
                </Stack>
                <Typography mt="14px" fontSize="26px" fontWeight="500">
                  {item.raisedStr === '-1' || item.raisedStr === ''
                    ? 'TBA'
                    : `$${formattingNum(item.raisedStr)}`}
                </Typography>
                <Button
                  sx={{
                    mt: '30px',
                    border: '1px solid',
                    padding: '8px 25px',
                  }}
                  onClick={() => {
                    window.open(item.origin);
                  }}
                >
                  {t('game_detail_financing_details')}
                </Button>
              </Box>
              <Box pl="60px">
                <Typography variant="body2">{t('invest_table_title5')}</Typography>
                <Stack direction="row" mt="14px" gap="24px" flexWrap="wrap">
                  {investorlist.map((itm: any, idx: any) => (
                    <Box key={idx}>{IvestorLogoItem(itm)}</Box>
                  ))}
                </Stack>
              </Box>
            </Stack>
          );
        })}
      </Box>
    ),
    [IvestorLogoItem, finastatus, handleInvestItem, investInfoList, investnameList, t]
  );

  // 游戏信息
  const gamedetailInfo = useMemo(
    () => (
      <Box
        padding="18px 24px"
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            display: { xs: 'none', sm: 'block' },
          }}
        >
          Info
        </Typography>
        <Box mt={{ xs: '0', sm: '26px' }}>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" color="text.secondary" flexShrink="0" mr="10px">
              {t('gamelibrary_genres')}
            </Typography>
            <Stack direction="row" gap="8px" flexWrap="wrap">
              {gamedetailData?.category?.split(',')?.map((item: any, index: any) => (
                <Box
                  key={index}
                  sx={{
                    padding: '6px 12px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    color: 'text.secondary',
                    bgcolor: 'background.sub',
                  }}
                >
                  {item}
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
        {allgameData?.chainPojoList && (
          <Box mt="30px">
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" color="text.secondary">
                {t('game_detail_network')}
              </Typography>
              <TitleCurreny
                librarydata={allgameData}
                size="medium"
                chain={gamedetailData?.chain ? gamedetailData?.chain : ''}
              />
            </Stack>
          </Box>
        )}

        {gamedetailData?.coinName && (
          <Box
            mt="30px"
            sx={{
              display: { xs: 'block', sm: 'none' },
            }}
          >
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" color="text.secondary">
                Token
              </Typography>
              <Stack direction="row">
                <Avatar
                  sx={{
                    width: '20px',
                    height: '20px',
                    mr: '5px',
                  }}
                  src={gamedetailData?.coinIconUrl}
                />
                <PricePercent
                  h5other
                  price={gamedetailData?.price}
                  change24h={gamedetailData?.change24h}
                />
                <Typography
                  variant="body2"
                  color={gamedetailData?.change24h > 0 ? '#15BD44' : '#E60000'}
                >
                  (24H)
                </Typography>
              </Stack>
            </Stack>
          </Box>
        )}

        <Box mt="34px">
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Typography variant="body1" color="text.secondary">
              {t('game_detail_platform')}
            </Typography>
            <Stack direction="row" alignItems="center" gap="8px">
              {getSupportPlatform(gamedetailData?.supportPlatform).length > 0 &&
                getSupportPlatform(gamedetailData?.supportPlatform).map(
                  (title: any, index: any) => (
                    <SvgIcon
                      className="game-detail-data-item-icon"
                      name={title}
                      // notmouse
                      key={index}
                    />
                  )
                )}
            </Stack>
          </Stack>
        </Box>
      </Box>
    ),
    [
      allgameData,
      gamedetailData?.category,
      gamedetailData?.chain,
      gamedetailData?.change24h,
      gamedetailData?.coinIconUrl,
      gamedetailData?.coinName,
      gamedetailData?.price,
      gamedetailData?.supportPlatform,
      getSupportPlatform,
      t,
    ]
  );

  // 日历详情
  const calenndarItem = useCallback(
    (item: any) => (
      <Box>
        <Typography variant="body2" color="text.secondary">
          {getNewYears(item.triggerAt * 1000)
            ? dayjs(item.triggerAt * 1000).format(t('event_calendar_time_noday'))
            : dayjs(item.triggerAt * 1000).format(t('event_calendar_time'))}
        </Typography>
        <Typography
          variant="body2"
          mt="8px"
          fontWeight="bold"
          onClick={() => {
            window.open(item.sourceLink);
          }}
        >
          {item.title}
        </Typography>
      </Box>
    ),
    [getNewYears, t]
  );

  const signEventsDom = useMemo(
    () => (
      <Box
        padding="18px 24px 12px 24px"
        sx={{
          bgcolor: 'background.paper',
          mt: '24px',
        }}
      >
        {smUp && gameDetailTitle('Significant Events')}
        <Box
          sx={{
            mt: '24px',
            position: 'relative',
          }}
        >
          <Box>
            <Box
              sx={{
                width: '1px',
                height: '100%',
                bgcolor: 'background.border',
                position: 'absolute',
                flexShrink: 0,
              }}
            />
            {gamedetailData?.eventCalendarList &&
              (!smUp
                ? gamedetailData.eventCalendarList
                : gamedetailData.eventCalendarList.slice(0, 5)
              ).map((item: any, index: any) => (
                <Stack direction="row" ml="-3px" mb="16px" key={index}>
                  <Box
                    sx={{
                      width: '7px',
                      height: '7px',
                      bgcolor: 'text.secondary',
                      borderRadius: '4px',
                      flexShrink: 0,
                    }}
                  />
                  <Box ml="13px" mt="-8px">
                    {calenndarItem(item)}
                  </Box>
                </Stack>
              ))}
          </Box>
        </Box>
        {gamedetailData?.eventCalendarList?.length > 5 && smUp && (
          <Button
            sx={{
              width: '100%',
              height: '44px',
              bgcolor: 'background.sub',
              mb: '16px',
            }}
            onClick={() => handleOpenModal(0)}
          >
            {t('public_more')}
          </Button>
        )}
      </Box>
    ),
    [calenndarItem, gamedetailData?.eventCalendarList, handleOpenModal, smUp, t]
  );

  // 任务Item信息
  const campaignItemDom = useCallback(
    (type: any, info: any) => (
      <Stack
        direction="row"
        sx={{
          bgcolor: type === 1 ? 'background.sub' : 'background.paper',
          borderRadius: '5px',
          mb: '16px',
          overflow: 'hidden',
          cursor: 'pointer',
        }}
        onClick={() => handleToTaskdetail(info.id)}
      >
        <Box
          sx={{
            width: type === 1 ? '40%' : '48%',
            height: type === 1 ? '96px' : '90px',
            flexShrink: 0,
          }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            src={info.picUrl}
            alt=""
          />
        </Box>
        <Stack direction="column" justifyContent="space-between" padding="8px 10px">
          <Typography
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              fontWeight: 'bold',
            }}
            variant="body2"
          >
            {info.title}
          </Typography>
          <Typography
            sx={{
              width: '80px',
              textAlign: 'center',
              padding: '4px 0',
              borderRadius: '16px',
              fontSize: '12px',
              fontWeight: 'bold',
              bgcolor: getTaskTimeType(info).bg,
              color: getTaskTimeType(info).textcolor,
            }}
          >
            {getTaskTimeType(info).text}
          </Typography>
        </Stack>
      </Stack>
    ),
    [getTaskTimeType, handleToTaskdetail]
  );

  const campaignDom = useMemo(
    () => (
      <Box mt="40px">
        {smUp && gameDetailTitle(t('quest'))}

        <Box mt="24px">
          {gamedetailData?.questList &&
            (smUp ? gamedetailData.questList.slice(0, 2) : gamedetailData.questList).map(
              (item: any, index: any) => <Box key={index}>{campaignItemDom(0, item)}</Box>
            )}
        </Box>
        {gamedetailData?.questList?.length > 2 && smUp && (
          <Button
            sx={{
              width: '100%',
              height: '44px',
              bgcolor: 'background.sub',
            }}
            onClick={() => handleOpenModal(1)}
          >
            {t('public_more')}
          </Button>
        )}
      </Box>
    ),
    [campaignItemDom, gamedetailData?.questList, handleOpenModal, smUp, t]
  );

  const popupModel = useMemo(
    () => (
      <Modal
        open={modaltype.flag}
        onClose={handleCloseModal}
        aria-describedby="modal-modal-description"
      >
        {modaltype.type === 2 ? (
          <Box
            sx={{
              position: 'absolute' as 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxWidth: '70%',
            }}
          >
            <Box
              sx={{
                position: 'relative',
              }}
            >
              <img src={detailbigimg.url} alt="" />
              <Box
                sx={{
                  position: 'absolute',
                  top: '48%',
                  left: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handlePrv(detailbigimg.num)}
              >
                <img
                  style={{
                    width: '40px',
                  }}
                  src="/images/icon/icon-banner-arrows-l.webp"
                  alt=""
                />
              </Box>
              <Box
                sx={{
                  position: 'absolute',
                  top: '48%',
                  right: '5px',
                  cursor: 'pointer',
                }}
                onClick={() => handleNext(detailbigimg.num)}
              >
                <img
                  style={{
                    width: '40px',
                  }}
                  src="/images/icon/icon-banner-arrows-r.webp"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
        ) : (
          <Box sx={style}>
            <Box sx={closestyle} onClick={handleCloseModal}>
              <CloseTwoToneIcon color="action" />
            </Box>
            <Typography variant="h4" textAlign="center">
              {modaltype.type === 0 ? 'Calendar' : 'Campaign'}
            </Typography>
            {modaltype.type === 0 && (
              <Box>
                {gamedetailData?.eventCalendarList.map((item: any, index: any) => (
                  <Box
                    mt="24px"
                    key={index}
                    sx={{
                      pb: '24px',
                      borderBottom: '1px solid',
                      borderColor: 'background.border',
                      cursor: 'pointer',
                      '&:last-child': {
                        border: 'none',
                      },
                    }}
                  >
                    {calenndarItem(item)}
                  </Box>
                ))}
              </Box>
            )}

            {modaltype.type === 1 && (
              <Box mt="24px">
                {gamedetailData?.questList?.map((item: any, index: any) => (
                  <Box key={index}>{campaignItemDom(1, item)}</Box>
                ))}
              </Box>
            )}
          </Box>
        )}
      </Modal>
    ),
    [
      calenndarItem,
      campaignItemDom,
      detailbigimg.num,
      detailbigimg.url,
      gamedetailData?.eventCalendarList,
      gamedetailData?.questList,
      handleCloseModal,
      handleNext,
      handlePrv,
      modaltype.flag,
      modaltype.type,
    ]
  );

  const FinancItem = useCallback(
    (widthnum: string, title: string, desc: any, type: number) => (
      <Box width={widthnum}>
        <Typography variant="caption" color="text.secondary">
          {title}
        </Typography>
        {type === 0 && (
          <Typography variant="body2" mt="5px" fontWeight="bold">
            {desc}
          </Typography>
        )}
        {type === 1 && (
          <Box mt="5px" fontSize="14px" fontWeight="bold">
            {desc.price ? (
              <PricePercent h5other price={desc.price} change24h={desc.change24h} />
            ) : desc.tradable === 'No' ? (
              t('invest_not_busness')
            ) : (
              t('invest_can_busness')
            )}
          </Box>
        )}
        {type === 2 && desc}
      </Box>
    ),
    [t]
  );

  const investListDom = useCallback(
    (list: any) => (
      <Stack direction="row" flexWrap="wrap" gap="0 18px">
        {list.map((inviiem: any, invindex: any) => (
          <Box
            key={invindex}
            sx={{
              position: 'relative',
              fontSize: '14px',
              fontWeight: 'bold',
            }}
          >
            {inviiem.orgName}
            {list.length === invindex + 1 ? '' : ','}
            {!inviiem.follower && (
              <Typography
                variant="body1"
                sx={{
                  position: 'absolute',
                  top: '-3px',
                  right: '-5px',
                }}
              >
                *
              </Typography>
            )}
          </Box>
        ))}
      </Stack>
    ),
    []
  );

  // h5投融资
  const h5FinancDom = useMemo(
    () => (
      <Stack mt="16px" gap="16px">
        {gamedetailData?.financingInfoList.map((item: any, index: any) => {
          if (item.followerPojoList.length > 0) {
            item.followerPojoList.map((fl: any) => {
              fl.follower = true;
            });
          }
          const investorlist = item.leaderPojoList.concat(item.followerPojoList);
          const investDom = investListDom(investorlist);
          return (
            <Box
              sx={{
                bgcolor: 'background.paper',
                padding: '20px',
              }}
              key={index}
            >
              <Stack direction="row" alignItems="center" justifyContent="space-between">
                <Typography variant="h5">{item.round}</Typography>
                <Button
                  sx={{
                    border: '1px solid',
                    borderColor: 'text.primary',
                  }}
                  onClick={() => linkTo(item.origin)}
                >
                  {t('game_detail_financing_details')}
                </Button>
              </Stack>
              <Box
                sx={{
                  width: '100%',
                  margin: '16px 0',
                  height: '1px',
                  bgcolor: 'border',
                }}
              />
              <Stack direction="row" gap="15px 0" flexWrap="wrap">
                {FinancItem(
                  '50%',
                  t('invest_table_title3'),
                  dayjs(item.inverstDateStamp * 1000).format(t('time_years_mouth')),
                  0
                )}
                {FinancItem(
                  '50%',
                  t('invest_table_title2'),
                  item.raisedStr === '-1' ? 'TBA' : `${formattingNum(item.raisedStr)}`,
                  0
                )}
                {FinancItem('100%', t('invest_table_title4'), item, 1)}
                {FinancItem('100%', t('invest_table_title5'), investDom, 2)}
              </Stack>
            </Box>
          );
        })}
      </Stack>
    ),
    [FinancItem, gamedetailData?.financingInfoList, investListDom, linkTo, t]
  );

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabslist = ['Game Guide', 'Financing', 'Data', 'Activities & Campaign', 'Reviews'];

  // H5 tabs切换
  const tabsDom = useMemo(
    () => (
      <Box>
        <Tabs scrollButtons={false} value={tabvalue} onChange={handleChange}>
          {tabslist.map((item, index) => (
            <Tab key={index} label={item} {...a11yProps(index)} />
          ))}
        </Tabs>
        {tabvalue === 0 && (
          <Box mt="16px">
            {gamedetailInfo}
            <Box mt="28px">
              {gameDetailTitle('Introduction')}
              {gameDesc}
            </Box>
          </Box>
        )}
        {tabvalue === 1 && h5FinancDom}
        {tabvalue === 2 && (
          <Box>
            <GameNftDom />
            <GameDisTwData ish5 distwinfo={gamedetailData} />
          </Box>
        )}
        {tabvalue === 3 && (
          <Box mt="16px">
            <Stack direction="row" gap="10px">
              {['Activities', 'Campaign'].map((item, index) => (
                <Button
                  key={index}
                  sx={
                    {
                      bgcolor: actype === index ? 'primary.main' : 'background.paper',
                      color: actype === index && '#fff',
                      fontWeight: '400',
                      '&:hover': {
                        bgcolor: actype === index ? 'primary.main' : 'background.paper',
                      },
                    } as any
                  }
                  onClick={() => setActype(index)}
                >
                  {item}
                </Button>
              ))}
            </Stack>
            <Box>
              {actype === 0 &&
                (gamedetailData?.eventCalendarList.length > 0 ? signEventsDom : <NotData />)}
              {actype === 1 && (gamedetailData?.questList?.length > 0 ? campaignDom : <NotData />)}
            </Box>
          </Box>
        )}
        {tabvalue === 4 && (
          <Box mt="16px">
            <GameReviews />
          </Box>
        )}
      </Box>
    ),
    [
      actype,
      campaignDom,
      gameDesc,
      gamedetailData,
      gamedetailInfo,
      h5FinancDom,
      signEventsDom,
      tabslist,
      tabvalue,
    ]
  );

  return (
    <Box>
      <Grid
        container
        mt="40px"
        sx={{
          display: { xs: 'none', sm: 'flex' },
        }}
        justifyContent="space-between"
      >
        <Grid item xs={9}>
          <Box mb={GamedetailUrl(gamedetailData).length > 0 ? '40px' : '0'}>
            {gamedetailData?.id
              ? GamedetailUrl(gamedetailData).length > 0
                ? gamePicture
                : undefined
              : pictureSkeleton}
          </Box>
          {gamedetailData?.gameDesc !== '' && (
            <Box mb="40px">
              {gameDetailTitle(t('game_detail_introduction'))}
              {gameDesc}
            </Box>
          )}

          {gamedetailData?.financingInfoList?.length > 0 && (
            <Box mb="40px">
              {gameDetailTitle(t('game_detail_financing'))}
              {financingDom}
            </Box>
          )}

          {(gamedetailData?.twitterDataList || gamedetailData?.discordDataLis) && (
            <Box mb="40px">
              {gameDetailTitle(t('game_detail_community_fans'))}
              <GameDisTwData isH5={false} distwinfo={gamedetailData} />
            </Box>
          )}

          <Box mb="40px">
            {gameDetailTitle(t('game_detail_user_reviews'))}
            <Box
              mt="24px"
              sx={{
                p: '32px',
                borderRadius: '5px',
                bgcolor: 'background.paper',
                minHeight: '400px',
              }}
            >
              <GameReviews />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2.8}>
          <GameNftDom />
          {gamedetailInfo}
          {gamedetailData?.eventCalendarList?.length > 0 && signEventsDom}
          {gamedetailData?.questList?.length > 0 && campaignDom}
          {popupModel}
        </Grid>
      </Grid>
      <Box
        sx={{
          display: { xs: 'block', sm: 'none' },
          padding: '0 16px',
          mt: '32px',
        }}
      >
        {tabsDom}
      </Box>
    </Box>
  );
};
