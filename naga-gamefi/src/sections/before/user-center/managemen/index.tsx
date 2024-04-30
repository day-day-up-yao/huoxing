import { Box, Typography, Stack } from '@mui/material';
import React, { useContext, useCallback } from 'react';
import moment from 'moment';
import { Uploader } from 'rsuite';
import Cookies from 'js-cookie';

import SvgIcon from 'src/components/svg-icon';
import NotData from 'src/components/before/not-data';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';
import { toast } from 'src/components/toast';
import Pagination from 'src/components/before/pagination';

import { Context } from '../context';

export default () => {
  const { t, isDark, personsetinfo, linkTo, handleTaskControls, getMyPage } = useContext(Context);

  const PointerBtn = useCallback(
    (item: any, type: number, text: string, bg?: boolean, svg?: string) => (
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          cursor: 'pointer',
          bgcolor: bg ? 'background.neutral' : '',
          padding: '6px 12px',
          borderRadius: '5px',
        }}
        onClick={(e) => {
          // e.stopPropagation();
          if (type === 3) return;
          handleTaskControls(type, item);
        }}
      >
        <SvgIcon
          name={svg || 'download_icon'}
          style={{
            color: isDark ? '#9facbf' : '#626364',
          }}
        />
        <Typography variant="body2" color="text.secondary" ml="4px">
          {text}
        </Typography>
      </Stack>
    ),
    [handleTaskControls, isDark]
  );

  // 上传中奖名单
  const upLoaderWinner = useCallback(
    (item: any) => (
      <Box ml="10px">
        <Uploader
          className="upload-task-winnerlist-con-up"
          action={`${HOST_API}/api/quest/uploadWinnerSheet`}
          fileListVisible={false}
          accept="xls,xlsx"
          // listType="picture-text"
          data={{ questId: item.id }}
          name="file"
          headers={{
            auToken: Cookies.get('auToken'),
            'Sign-Param': ajaxSignature(),
          }}
          onError={(err) => {
            console.log(err, 'ERR');
          }}
          onUpload={(filter) => {
            console.log(filter);
          }}
          onSuccess={(res) => {
            if (res.code === 0) {
              toast.info(t('public_upload_success'));
            } else {
              toast.error(res.msg);
            }
          }}
        >
          <div className="upload-task-winnerlist-con-btn">
            {PointerBtn(item, 3, t('quest_detail_reward_winnerlist_uploader'), true, 'uploader2')}
          </div>
        </Uploader>
      </Box>
    ),
    [PointerBtn, t]
  );
  // 显示活动奖励
  const getRewardTypeDom = useCallback((item: any) => {
    if (item?.rewardType === 1) {
      return (
        <Stack direction="row" gap="2px">
          <div>{item.rewardNum}</div>
          <div>{item.rewardToken.toUpperCase()}</div>
        </Stack>
      );
    }
    if (item?.rewardType === 2) {
      return 'NFT';
    }
    if (item?.rewardType === 3) {
      return 'Whitelist';
    }
  }, []);

  return (
    <Box mt="32px">
      {personsetinfo.inforList.length > 0 ? (
        personsetinfo.inforList.map((item: any, index: number) => {
          let taskstatus = {
            color: '#F4BC2C',
            text: 'Upcoming',
            type: 0,
          };

          const startTime = item.beginTime * 1000;
          const endTime = item.endTime * 1000;

          if (startTime - new Date().getTime() <= 0 && endTime - new Date().getTime() > 0) {
            taskstatus = {
              color: '#15BD44',
              text: 'Ongoing',
              type: 1,
            };
          }

          if (endTime - new Date().getTime() < 0) {
            taskstatus = {
              color: '#9FACBF',
              text: 'Ended',
              type: 2,
            };
          }
          return (
            <Stack
              direction="row"
              key={index}
              sx={{
                padding: '24px',
                bgcolor: 'background.paper',
                borderRadius: '5px',
                mb: '24px',
                cursor: 'pointer',
              }}
              // onClick={() => linkTo(`/taskdetail/${item.id}`)}
            >
              <Box
                sx={{
                  width: '258px',
                  height: '145px',
                  borderRadius: '5px',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    width: '100%',
                    height: '100%',
                    background: `url(${item?.picUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.06)',
                    },
                  }}
                  onClick={() => linkTo(`/taskdetail/${item.id}`)}
                />
              </Box>

              <Box ml="16px" flex="1">
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center">
                    <Box
                      sx={{
                        color: taskstatus.color,
                        padding: '2px 11px',
                        border: `1px solid ${taskstatus.color}`,
                        fontSize: '12px',
                        borderRadius: '12px',
                      }}
                    >
                      {taskstatus.text}
                    </Box>
                    <Stack direction="row" alignItems="center" ml="16px">
                      <SvgIcon
                        name="green_time"
                        style={{
                          color: '#9facbf',
                        }}
                      />
                      <Typography variant="body2" color="text.secondary" ml="6px">
                        (UTC+8) {moment(item.beginTime * 1000).format('YYYY-MM-DD HH:mm')} ～
                        {moment(item.endTime * 1000).format('MM-DD HH:mm')}
                      </Typography>
                    </Stack>
                  </Stack>
                  {item.status === 2 &&
                    item.drawWinnerMethod === 1 &&
                    PointerBtn(item, 0, t('quest_detail_reward_download_template'), false)}
                </Stack>

                <Typography
                  variant="h5"
                  mt="10px"
                  sx={{
                    height: '60px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }}
                >
                  {item.title}
                </Typography>
                <Stack direction="row" mt="10px" alignItems="center" justifyContent="space-between">
                  <Stack direction="row" alignItems="center">
                    <Box
                      sx={{
                        color: '#F4BC2C',
                        padding: '5px 11px',
                        fontSize: '16x',
                        borderRadius: '18px',
                        bgcolor: 'rgba(244, 188, 44, 0.10)',
                        fontWeight: '500',
                      }}
                    >
                      {getRewardTypeDom(item)}
                    </Box>
                    {/* <Stack
                    direction="row"
                    ml="10px"
                    alignItems="center"
                    sx={{
                      padding: '0 16px 0 8px',
                      borderRadius: '20px',
                      bgcolor: 'rgba(176, 97, 255, 0.12)',
                    }}
                  >
                    <img
                      style={{
                        width: '32px',
                        height: '32px',
                      }}
                      src="/images/icon/bs.png"
                      alt=""
                    />
                    <Typography variant="body1" color="#B061FF" fontWeight="500">
                      100
                    </Typography>
                  </Stack> */}
                  </Stack>
                  <Stack direction="row" alignItems="center">
                    {(item.status === 3 || item.status === 2) && (
                      <Box>{PointerBtn(item, 1, t('quest_detail_reward_submitlist'), true)}</Box>
                    )}

                    {item.status === 3 && (
                      <Box ml="10px">
                        {PointerBtn(item, 2, t('quest_detail_reward_winnerlist_download'), true)}
                      </Box>
                    )}
                    {item.status === 2 && item.drawWinnerMethod === 1 && upLoaderWinner(item)}

                    {taskstatus.type === 0 && (
                      <Box ml="10px">{PointerBtn(item, 4, 'Delete', true, 'delete')}</Box>
                    )}
                  </Stack>
                </Stack>
              </Box>
            </Stack>
          );
        })
      ) : (
        <NotData />
      )}
      {personsetinfo?.recordCount > 10 && (
        <Pagination
          totalData={personsetinfo?.recordCount}
          pageSize={10}
          pageChange={(curPage: any) => {
            getMyPage(curPage);
            // console.log(curPage)
          }}
        />
      )}
    </Box>
  );
};
