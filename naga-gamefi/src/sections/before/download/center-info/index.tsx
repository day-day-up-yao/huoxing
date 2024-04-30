import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';

export default () => {
  const { t } = useTranslation();
  const running = useRef<any>();
  const runningChild1 = useRef<any>();
  const runningChild2 = useRef<any>();
  useEffect(() => {
    // const demo = document.getElementById('running');
    // const demo1 = document.getElementById('running-child1');
    // const demo2 = document.getElementById('running-child2');
    const demo = running.current;
    const demo1 = runningChild1.current;
    const demo2 = runningChild2.current;
    const speed = 30; // 数值越大滚动速度越慢
    if (demo && demo1 && demo2) {
      demo2.innerHTML = demo1.innerHTML;
      const Marquee = () => {
        if (demo2.offsetWidth - demo.scrollLeft <= 0) {
          demo.scrollLeft -= demo1.offsetWidth;
        } else {
          demo.scrollLeft += 1;
        }
      };

      setInterval(Marquee, speed);
    }
    // var MyMar = setInterval(Marquee, speed)
    // demo.onmouseover = function () {
    //     clearInterval(MyMar)
    // }
    // demo.onmouseout = function () {
    //     MyMar = setInterval(Marquee, speed)
    // }
  }, []);
  const runlist = [
    '/images/bigimg/download_run1.png',
    '/images/bigimg/download_run2.png',
    '/images/bigimg/download_run3.png',
    '/images/bigimg/download_run4.png',
    '/images/bigimg/download_run5.png',
    '/images/bigimg/download_run6.png',
    '/images/bigimg/download_run7.png',
    '/images/bigimg/download_run8.png',
    '/images/bigimg/download_run9.png',
  ];

  return (
    <div className="downlaod-center-info">
      <div className="downlaod-center-info-con">
        <div className="downlaod-center-info-con-topborder" />
        <div className="downlaod-center-info-con-text">
          <h3>{t('download_title')}</h3>
          <div className="downlaod-center-info-con-text-desc">{t('download_text')}</div>
        </div>
        <div className="downlaod-center-info-con-running" id="running" ref={running}>
          <div
            className="downlaod-center-info-con-running-list"
            id="running-child1"
            ref={runningChild1}
          >
            {runlist.map((item, index) => (
              <div className="downlaod-center-info-con-running-list-item" key={index}>
                <img src={item} alt="" />
              </div>
            ))}
          </div>
          <div
            className="downlaod-center-info-con-running-list"
            id="running-child2"
            ref={runningChild2}
          />
        </div>
        <div className="downlaod-center-info-con-bottomborder" />
      </div>
    </div>
  );
};
