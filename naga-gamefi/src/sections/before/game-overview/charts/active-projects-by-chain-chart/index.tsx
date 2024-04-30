import React, { useEffect, useMemo, useRef } from 'react';
import * as echarts from 'echarts';
import dayjs from 'dayjs';

import './index.scss';
import { useTheme } from '@mui/system';
import { useBreakPoint } from 'src/utils/hooks/use-break-point';

const GameOverviewActiveProjectsByChainChart = (props: any) => {
  const theme = useTheme();
  const option = useMemo(
    () => ({
      title: {
        text: 'Active Projects by Chain',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 24,
          lineHeight: 28,
        },
        top: 32,
        left: 32,
      },
      color: [
        '#509EE3',
        '#87BCEC',
        '#227FD2',
        '#88BF4D',
        '#A7D07C',
        '#689636',
        '#A989C5',
        '#C8B4DA',
        '#8A5EB0',
        '#EF8C8C',
        '#F7C4C4',
        '#E75454',
        '#F9D45C',
        '#F7CBA9',
      ],
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 40,
        top: 100,
        height: 298,
        width: 128,
        padding: 4,
        itemGap: 10,
        itemWidth: 12,
        itemHeight: 12,
        icon: 'circle',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 14,
          lineHeight: 18,
        },
        pageButtonItemGap: 22,
        pageButtonGap: 10,
        pageIcons: {
          vertical: [
            'path://M1.62149 9.27784C0.775699 9.27784 0.311859 8.29314 0.850475 7.64102L5.22899 2.33984C5.62895 1.85559 6.37105 1.85559 6.77101 2.33984L11.1495 7.64103C11.6881 8.29314 11.2243 9.27784 10.3785 9.27784H1.62149Z',
            'path://M1.62149 2.72216C0.775699 2.72216 0.311859 3.70686 0.850475 4.35898L5.22899 9.66016C5.62895 10.1444 6.37105 10.1444 6.77101 9.66016L11.1495 4.35897C11.6881 3.70686 11.2243 2.72216 10.3785 2.72216L1.62149 2.72216Z',
          ],
        },
        pageTextStyle: {
          color: '#767E89',
          fontSize: 12,
          lineHeight: 16,
        },
        pageIconSize: 12,
        pageIconColor: '#aaa',
        pageIconInactiveColor: '#393B40',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            opacity: 0,
          },
          snap: true,
          label: {
            formatter: (params: any) => {
              if (params.seriesData.length === 0) {
                (window as any).mouseCurValue = params.value;
              }
            },
          },
        },
        padding: 0,
        backgroundColor: '#2E3036',
        borderColor: '#2E3036',
        formatter: (params: any) => {
          // console.log('params', params)
          let dom = ``;
          let sum = 0;
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < params.length; i++) {
            const series = params[i];
            sum += Number(series.data);
            if (sum >= (window as any).mouseCurValue) {
              dom = `
                          <div class="game-overview-active-projects-by-chain-chart-tooltip">
                              <div class="tooltip-item">
                                  <div class="tooltip-item-left">
                                      chain:
                                  </div>
                                  <div class="tooltip-item-right">
                                      ${series.seriesName}
                                  </div>
                              </div>
                              <div class="tooltip-item">
                                  <div class="tooltip-item-left">
                                      on date:
                                  </div>
                                  <div class="tooltip-item-right">
                                      ${series.axisValue}
                                  </div>
                              </div>
                              <div class="tooltip-item">
                                  <div class="tooltip-item-left">
                                      Active Projects:
                                  </div>
                                  <div class="tooltip-item-right">
                                      ${series.value}
                                  </div>
                              </div>
                          </div>
                      `;
              break;
            }
          }

          return dom;
        },
      },
      grid: {
        top: 102,
        left: 194,
        right: 48,
        bottom: 58,
      },
      xAxis: [
        {
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
      ],
      yAxis: [
        {
          type: 'value',
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
      ],
      series: [],
    }),
    [theme.palette.text.primary]
  );

  const optionH5 = useMemo(
    () => ({
      title: {
        text: 'Active Projects by Chain',
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 12,
          lineHeight: 18,
        },
        top: 12,
        left: 12,
      },
      legend: {
        show: false,
      },
      grid: {
        top: 60,
        left: 50,
        right: 36,
        bottom: 52,
      },
    }),
    [theme.palette.text.primary]
  );

  const { data } = props;

  // 图表实体
  const myChart = useRef<any>();

  useEffect(() => {
    // 获取图表容器
    const ele = document.querySelector('#active-projects-by-chain-chart');

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

    let timeData: any = [];
    let lenged: any = []; // series的个数
    const dataList = [...data.rows];

    dataList.map((item) => {
      timeData.push(item[1]);
      lenged.push(item[0]);
    });

    // 去重 时间排序
    timeData = [...new Set(timeData)].sort((a: any, b: any) =>
      dayjs(a).isAfter(dayjs(b)) ? 1 : -1
    );
    lenged = [...new Set(lenged)];

    const series: any = [];
    lenged.map((item: any) => {
      // 生成  series
      const obj = {
        name: item,
        type: 'bar',
        stack: 'chain',
        emphasis: {
          focus: 'series',
        },
        data: [],
      };
      series.push(obj);
    });

    // 对series 的data进行处理
    dataList.map((item) => {
      series.map((item1: any) => {
        if (item1.name === item[0] && timeData.indexOf(item[1]) > -1) {
          item1.data[timeData.indexOf(item[1])] = item[2];
        }
      });
    });

    timeData = timeData.map((item: any) => dayjs(item).format('MMM D, YYYY'));

    myChart.current.hideLoading();
    myChart.current.setOption({
      ...optionObj,
      xAxis: [
        {
          data: timeData,
          type: 'category',
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
      ],
      series,
    });
  }, [data, optionObj]);

  return (
    <div
      className="game-overview-active-projects-by-chain-chart"
      id="active-projects-by-chain-chart"
    />
  );
};

export default GameOverviewActiveProjectsByChainChart;
