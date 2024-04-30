import { Stack, Box, Typography } from '@mui/material';
import * as echarts from 'echarts';
import { useRef, useEffect } from 'react';

import LeftInfo from './left-info';

export default ({ data, flowernum, followAdd, ish5 }: any) => {
  // 图表实体
  const myChart = useRef<any>();

  useEffect(() => {
    // const chartDom = document.getElementById('game-dicord-line-charts');
    let chartDom = document.getElementById('game-dicord-line-charts');
    if (ish5) {
      chartDom = document.getElementById('game-dicord-line-charts-h5');
    }
    if (!myChart.current) {
      // console.log(option)
      myChart.current = echarts.init(chartDom as any);
      let dataList: TwitterDataType[] = [];
      const timeData: string[] = [];
      // const likeNumData: any = [];
      const followNumData: any = [];
      // 去重 时间排序
      dataList = [...new Set(data)]?.sort((a: any, b: any) =>
        a.recordDate - b.recordDate > 0 ? 1 : -1
      ) as TwitterDataType[];

      dataList.map((item) => {
        timeData.push(
          `${item.recordDate.toString().substring(4, 6)}-${item.recordDate
            .toString()
            .substring(6, 8)}`
        );
        // likeNumData.push(item.likeNum >= 0 ? item.likeNum : 0);
        followNumData.push((item as any).memberNum);
      });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      const option = {
        // grid: {
        //   y: 'dataMin', // 起始于数据最小值
        //   height: '100%', // 相对于容器高度的比例
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: timeData,
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
          // interval: 10,
          min: 'dataMin',
          // max: 'dataMax',
          // splitNumber: 1,
          // axisTick: {
          //   show: true,
          // },
          // axisLabel: {
          //   padding: [5, 0, 5, 0],
          // },
        },
        series: [
          {
            data: followNumData,
            type: 'line',
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: followAdd < 0 ? '#E60000' : '#15BD44', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: 'rgba(255, 255, 255, 0)', // 100% 处的颜色
                  },
                ],
                global: false,
              },
            },
            lineStyle: {
              color: followAdd < 0 ? '#E60000' : '#15BD44',
            },
            smooth: true,
            symbol: 'none',
          },
        ],
      };
      window.onresize = () => {
        myChart.current.resize();
      };

      myChart.current.setOption(option);
    }
  }, [data, followAdd, ish5]);

  return (
    <Stack
      mt="24px"
      direction="row"
      padding="24px 40px"
      sx={{
        bgcolor: 'background.paper',
        borderRadius: '5px',
        width: { xs: '100%', sm: '48%' },
      }}
    >
      <LeftInfo svgname="discord_color" title="Discord" price={flowernum} percent={followAdd} />
      <Box paddingTop="20px" flex="1">
        <Box
          width={{ xs: '100%' }}
          height="70px"
          id={ish5 ? 'game-dicord-line-charts-h5' : 'game-dicord-line-charts'}
        />
      </Box>
    </Stack>
  );
};
