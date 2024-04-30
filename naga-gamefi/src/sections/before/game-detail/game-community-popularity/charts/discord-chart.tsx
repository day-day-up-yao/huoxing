import React, { useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import { Theme, useTheme } from '@mui/system';
import { Box, Stack, Typography } from '@mui/material';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

type DiscordChartProps = {
  data: DiscordDataType[];
  memberNum: number;
  memberAdd: number;
  onlineNum: number;
  onlineAdd: number;
  isPc: boolean;
};

const GameCommunityPopularityDiscordChart = (props: DiscordChartProps) => {
  const { data, isPc, memberNum, memberAdd, onlineNum, onlineAdd } = props;
  const { palette } = useTheme<Theme>();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optionH5 = {
    title: {
      text: 'Discord',
      textStyle: {
        color: palette.text.primary,
        fontSize: 16,
        lineHeight: 20,
      },
      top: 14,
      left: 12,
    },
    legend: {
      show: false,
    },
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const option = {
    //   title: {
    //     text: 'Discord',
    //     textStyle: {
    //       color: '#fff',
    //       fontSize: 22,
    //       lineHeight: 25,
    //     },
    //     top: 28,
    //     left: 24,
    //   },
    color: ['#416FCA', '#4B4E57'],
    grid: {
      top: 20,
      left: 80,
      right: 40,
      bottom: 20,
    },
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        // 轴线
        axisLine: {
          lineStyle: {
            color: '#767E89',
            fontSize: 12,
            lineHeight: 16,
          },
        },
        axisLable: {
          textStyle: {
            color: palette.text.primary,
          },
        },
        silent: false,
        splitLine: {
          show: false,
        },
        splitArea: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: palette.text.primary,
          },
        },
        splitLine: {
          lineStyle: {
            color: palette.text.disabled,
          },
        },
        splitNumber: 1,
        alignTicks: true,
        scale: true,
      },
    ],
    series: [],
  };

  // 图表实体
  const myChart = useRef<any>();

  useEffect(() => {
    // 获取图表容器
    const ele = document.querySelector('#game-community-popularity-discord-chart');

    const resize = () => {
      setTimeout(() => {
        if (myChart.current) {
          myChart.current.resize();
        }
      }, 200);
    };

    if (!myChart.current) {
      // console.log(option)
      // myChart.current = theme === 'dark' ? echarts.init(ele, 'dark') : echarts.init(ele)
      myChart.current = echarts.init(ele as any);
    }
    window.addEventListener('resize', resize);
    myChart.current.showLoading({
      textColor: palette.text.primary,
      maskColor: palette.background.paper,
    });

    return () => {
      window.removeEventListener('resize', resize);

      if (myChart.current) {
        myChart.current.dispose();
      }

      myChart.current = undefined;
    };
  }, [palette.background.paper, palette.text.primary]);

  const { isMob } = useBreakPoint();
  const optionObj = useMemo(
    () => (isMob ? { ...option, ...optionH5 } : { ...option }),
    [isMob, option, optionH5]
  );

  useEffect(() => {
    if (!data || data.length === 0 || !myChart.current) return;

    let dataList: DiscordDataType[] = [];
    const timeData: string[] = [];
    const onlineNumData: any = [];
    const memberNumData: any = [];

    // 去重 时间排序
    dataList = [...new Set(data)].sort((a: DiscordDataType, b: DiscordDataType) =>
      a.recordDate - b.recordDate > 0 ? 1 : -1
    );

    dataList.map((item) => {
      timeData.push(
        `${item.recordDate.toString().substring(4, 6)}-${item.recordDate
          .toString()
          .substring(6, 8)}`
      );
      onlineNumData.push(item.onlineNum);
      memberNumData.push(item.memberNum);
    });

    const series = [
      {
        name: 'Number of people online',
        type: 'bar',
        stack: '1',
        data: onlineNumData,
        barWidth: 15, // 柱体宽度
      },
      {
        name: 'Number of members',
        type: 'bar',
        data: memberNumData,
        stack: '1',
        barWidth: 15, // 柱体宽度
      },
    ];

    myChart.current.hideLoading();
    myChart.current.setOption({
      ...optionObj,
      xAxis: [
        {
          data: timeData,
          type: 'category',
          boundaryGap: true,
          // 轴线
          axisLine: {
            lineStyle: {
              color: palette.text.disabled,
            },
          },
          axisLabel: {
            color: palette.background.paper,
          },
          // 刻度线
          axisTick: {
            show: false,
          },
          silent: false,
          splitLine: {
            show: false,
          },
          splitArea: {
            show: false,
          },
        },
      ],
      //   legend: {
      //     icon: 'circle',
      //     data: ['Number of members', 'Number of people online'],
      //     formatter: (name: string) =>
      //       [
      //         `{classNameTitle|${name}}`,
      //         `${
      //           name === 'Number of members'
      //             ? `{classNameNum|${memberNum || ''}}{classNameMemberAdd|${
      //                 memberAdd ? (memberAdd > 0 ? `+${memberAdd}` : memberAdd) : 'no data'
      //               }}`
      //             : `{classNameNum|${onlineNum || ''}}{classNameOnlineAdd|${
      //                 onlineAdd ? (onlineAdd > 0 ? `+${onlineAdd}` : onlineAdd) : ''
      //               }}`
      //         }`,
      //       ].join('\n'),
      //     textStyle: {
      //       rich: {
      //         classNameTitle: {
      //           lineHeight: 28,
      //           fontSize: 12,
      //           color: '#fff',
      //           paddingBottom: 20,
      //           verticalAlign: 'bottom',
      //         },
      //         classNameNum: {
      //           color: '#fff',
      //           fontSize: 14,
      //           lineHeight: 32,
      //         },
      //         classNameMemberAdd: {
      //           color: memberAdd > 0 ? '#15BD44' : '#E60000',
      //           padding: [0, 8],
      //           lineHeight: 32,
      //           fontSize: 14,
      //         },
      //         classNameOnlineAdd: {
      //           color: onlineAdd > 0 ? '#15BD44' : '#E60000',
      //           padding: [0, 8],
      //           lineHeight: 32,
      //           fontSize: 14,
      //         },
      //       },
      //     },
      //     align: 'left',
      //     top: 78,
      //     left: 24,
      //     itemGap: isPc ? 40 : 10,
      //   },
      series,
    });
  }, [
    data,
    isPc,
    memberAdd,
    memberNum,
    onlineAdd,
    onlineNum,
    optionObj,
    palette.background.paper,
    palette.text.disabled,
  ]);

  // 标签
  const legendDom = useMemo(
    () => (
      <Stack
        width="100%"
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ m: '24px 0', p: '0 24px' }}
      >
        <Stack gap="12px" width="50%">
          <Stack direction="row" alignItems="center" gap="8px">
            <Box width="8px" height="8px" sx={{ bgcolor: '#586071', borderRadius: '50%' }} />
            <Typography sx={{ fontSize: '12px', lineHeight: '14px' }}>Number of members</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap="8px">
            <Box
              width="8px"
              height="8px"
              sx={({ palette }) => ({ bgcolor: palette.background.paper })}
            />
            <Stack direction="row" alignItems="center" gap="8px">
              <Typography sx={{ fontSize: '14px', lineHeight: '16px', fontWeight: 'bold' }}>
                {memberNum}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '16px',
                  color: memberAdd > 0 ? '#15BD44' : '#E60000',
                }}
              >
                {memberAdd ? (memberAdd > 0 ? `+${memberAdd}` : memberAdd) : ''}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack gap="12px" width="50%">
          <Stack direction="row" alignItems="center" gap="8px">
            <Box width="8px" height="8px" sx={{ bgcolor: '#416FCA', borderRadius: '50%' }} />
            <Typography sx={{ fontSize: '12px', lineHeight: '14px' }}>
              Number of people online
            </Typography>
          </Stack>
          <Stack direction="row" alignItems="center" gap="8px">
            <Box
              width="8px"
              height="8px"
              sx={({ palette }) => ({ bgcolor: palette.background.paper })}
            />
            <Stack direction="row" alignItems="center" gap="8px">
              <Typography sx={{ fontSize: '14px', lineHeight: '16px', fontWeight: 'bold' }}>
                {onlineNum}
              </Typography>
              <Typography
                sx={{
                  fontSize: '12px',
                  lineHeight: '14px',
                  color: onlineAdd > 0 ? '#15BD44' : '#E60000',
                }}
              >
                {onlineAdd ? (onlineAdd > 0 ? `+${onlineAdd}` : onlineAdd) : ''}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    ),
    [memberAdd, memberNum, onlineAdd, onlineNum]
  );

  return (
    <Box
      width={isPc ? 'calc(50% - 12px)' : '100%'}
      height="420px"
      sx={({ palette }) => ({ bgcolor: palette.background.paper })}
    >
      <Typography
        sx={{
          fontSize: '22px',
          fontWeight: '500',
          lineHeight: '26px',
          p: '24px',
          pb: '0',
        }}
      >
        Discord
      </Typography>
      {legendDom}
      <Box width="100%" height="260px" id="game-community-popularity-discord-chart" />
    </Box>
  );
};

export default GameCommunityPopularityDiscordChart;
