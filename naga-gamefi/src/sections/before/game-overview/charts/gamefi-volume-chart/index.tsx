import React, { useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import dayjs from 'dayjs';

import './index.scss';

import { useTheme } from '@mui/system';
import { formatNum } from 'src/utils/public';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

const GameOverviewVolumeChart = (props: any) => {
  const theme = useTheme();
  const option = useMemo(
    () => ({
      title: {
        text: 'GameFi Volume (Weekly)',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 24,
          lineHeight: 28,
        },
        top: 32,
        left: 32,
      },
      color: '#3370D6',
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
        },
        padding: 0,
        backgroundColor: '#2E3036',
        borderColor: '#2E3036',
        formatter: (params: any) => {
          // console.log('params', params)
          const axisValue = dayjs(params[0].axisValue).format('MMM D');
          const axisAfter = dayjs(params[0].axisValue).add(7, 'day').format('MMM D, YYYY');
          const value = formatNum(params[0].value.toFixed(2));

          const dom = `
                  <div class="game-overview-volume-chart-tooltip">
                      <div class="tooltip-item">
                          <div class="tooltip-item-left">
                              on date:
                          </div>
                          <div class="tooltip-item-right">
                              ${axisValue} — ${axisAfter}
                          </div>
                      </div>
                      <div class="tooltip-item">
                          <div class="tooltip-item-left">
                              Sum of volume:
                          </div>
                          <div class="tooltip-item-right">
                              ${value}
                          </div>
                      </div>
                  </div>
              `;

          return dom;
        },
      },
      grid: {
        top: 100,
        left: 140,
        right: 48,
        bottom: 58,
      },
      xAxis: {
        data: [],
        type: 'time',
        name: 'no date',
        nameLocation: 'middle',
        nameGap: 35,
        // 轴线
        axisLine: {
          lineStyle: {
            color: '#767E89',
            fontSize: 12,
            lineHeight: 16,
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
      yAxis: {
        name: 'Volume',
        // 居中
        nameLocation: 'middle',
        // 坐标轴名称与轴线之间的距离
        nameGap: 90,
        // 轴线
        axisLine: {
          lineStyle: {
            color: '#767E89',
            fontSize: 12,
            lineHeight: 16,
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
      series: [
        {
          type: 'bar',
          data: [],
          // Set `large` for large data amount
          large: true,
        },
      ],
    }),
    [theme.palette.text.primary]
  );

  const optionH5 = useMemo(
    () => ({
      title: {
        text: 'GameFi Volume (Weekly)',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 12,
          lineHeight: 18,
        },
        top: 12,
        left: 12,
      },
      grid: {
        top: 60,
        left: 120,
        right: 36,
        bottom: 44,
      },
    }),
    [theme.palette.text.primary]
  );
  const { data } = props;

  // 图表实体
  const myChart = useRef<any>();

  useEffect(() => {
    // 获取图表容器
    const ele = document.querySelector('#volume-chart');

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
      textColor: theme.palette.text.primary,
      maskColor: theme.palette.background.paper,
    });

    return () => {
      window.removeEventListener('resize', resize);
      if (myChart.current) {
        myChart.current.dispose();
      }

      myChart.current = undefined;
    };
  }, [theme.palette.background.paper, theme.palette.text.primary]);

  const { isMob } = useBreakPoint();
  const optionObj = useMemo(
    () => (isMob ? { ...option, ...optionH5 } : { ...option }),
    [isMob, option, optionH5]
  );

  useEffect(() => {
    if (!data || Object.keys(data).length === 0 || !myChart.current) return;

    const timeData: any = [];
    const valueData: any = [];
    const dataList = [...data.rows].sort((a, b) => (dayjs(a[0]).isAfter(dayjs(b[0])) ? 1 : -1));

    dataList.map((item) => {
      const time = dayjs(item[0]).format('MMM D, YYYY');
      timeData.push(time);
      valueData.push(item[1]);
    });

    myChart.current.hideLoading();
    myChart.current.setOption({
      ...optionObj,
      xAxis: {
        data: timeData,
      },
      series: [
        {
          type: 'bar',
          data: valueData,
          // Set `large` for large data amount
          large: true,
        },
      ],
    });
  }, [data, optionObj]);

  return <div className="game-overview-volume-chart" id="volume-chart" />;
};

export default GameOverviewVolumeChart;
