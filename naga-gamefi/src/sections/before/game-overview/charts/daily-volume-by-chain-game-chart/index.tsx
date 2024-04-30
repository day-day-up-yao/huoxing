import React, { useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';

import './index.scss';

import { useTheme } from '@mui/system';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';
import { formatNum } from 'src/utils/public';

const GameOverviewDailyVolumeByChainGameChart = (props: any) => {
  const theme = useTheme();
  const option = useMemo(
    () => ({
      title: {
        text: 'Daily Volume by Chain & Game',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 24,
          lineHeight: 28,
        },
        top: 32,
        left: 32,
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => `${params.name}<br/>$${formatNum(params.value.toFixed(0))}`,
      },
      series: [],
    }),
    [theme.palette.text.primary]
  );

  const optionH5 = useMemo(
    () => ({
      title: {
        text: 'Daily Volume by Chain & Game',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 12,
          lineHeight: 18,
        },
        top: 12,
        left: 12,
      },
    }),
    [theme.palette.text.primary]
  );

  const { data } = props;

  // 图表实体
  const myChart = useRef<any>();

  useEffect(() => {
    // 获取图表容器
    const ele = document.querySelector('#daily-volume-by-chain-game-chart');

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

    const dataList = [...data.rows];

    let coreData: any = [];
    let outerData: any = [];

    dataList.map((item) => {
      if (item[1]) {
        const coreObj = {
          value: item[1],
          name: item[2],
        };

        const outerObj = {
          value: item[1],
          name: item[0],
        };

        coreData.push(coreObj);
        outerData.push(outerObj);
      }
    });

    // 去重 合并 排序
    coreData = coreData
      .reduce((total: any, cur: any) => {
        const hasValue = total.findIndex((current: any) => current.name === cur.name);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        hasValue === -1 && total.push(cur);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, operator-assignment
        hasValue !== -1 && (total[hasValue].value = total[hasValue].value + cur.value);
        return total;
      }, [])
      .sort((a: any, b: any) => b.value - a.value);

    outerData = outerData
      .reduce((total: any, cur: any) => {
        const hasValue = total.findIndex((current: any) => current.name === cur.name);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        hasValue === -1 && total.push(cur);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions, operator-assignment
        hasValue !== -1 && (total[hasValue].value = total[hasValue].value + cur.value);
        return total;
      }, [])
      .sort((a: any, b: any) => b.value - a.value);

    myChart.current.hideLoading();

    const series = isMob
      ? [
          {
            type: 'pie',
            selectedMode: 'single',
            heigth: 300,
            top: 44,
            bottom: 38,
            left: 2,
            right: 2,
            radius: [0, '20%'],
            label: {
              position: 'inner',
              fontSize: 12,
            },
            labelLine: {
              show: false,
            },
            data: coreData,
          },
          {
            type: 'pie',
            heigth: 300,
            top: 44,
            bottom: 38,
            left: 2,
            right: 2,
            radius: ['40%', '60%'],
            label: {
              fontSize: 12,
              color: '#767E89',
              formatter: (params: any) => `${params.name} $${formatNum(params.value.toFixed(0))}`,
            },
            labelLine: {
              length: 10,
            },
            data: outerData,
          },
        ]
      : [
          {
            type: 'pie',
            selectedMode: 'single',
            heigth: 352,
            top: 110,
            bottom: 38,
            left: 64,
            right: 64,
            radius: [0, '20%'],
            label: {
              position: 'inner',
              fontSize: 12,
            },
            labelLine: {
              show: false,
            },
            data: coreData,
          },
          {
            type: 'pie',
            heigth: 352,
            top: 110,
            bottom: 38,
            left: 64,
            right: 64,
            radius: ['40%', '60%'],
            label: {
              fontSize: 12,
              color: '#767E89',
              formatter: (params: any) => `${params.name} $${formatNum(params.value.toFixed(0))}`,
            },
            labelLine: {
              length: 30,
            },
            data: outerData,
          },
        ];

    myChart.current.setOption({
      ...optionObj,
      series,
    });
  }, [data, isMob, optionObj]);

  return (
    <div
      className="game-overview-daily-volume-by-chain-game-chart"
      id="daily-volume-by-chain-game-chart"
    />
  );
};

export default GameOverviewDailyVolumeByChainGameChart;
