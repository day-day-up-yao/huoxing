import React, { useEffect, useState } from 'react';
// import Math from 'mathjs'
import classnames from 'classnames';

import './index.scss';

export default (props: any) => {
  const { endtime, FinishFn, timetype } = props;
  const [timeobj, setTimeobj] = useState<any>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    flag: false,
  });
  const classes = classnames('countdown', {
    'time-end-in': timetype === 1,
  });
  useEffect(() => {
    const end_time = endtime;
    const timepoor = end_time - new Date().getTime();
    let sys_time = Math.abs(timepoor);
    const Time = setInterval(() => {
      if (sys_time > 1000) {
        sys_time -= 1000;
        const day = Math.floor(sys_time / 1000 / 3600 / 24);
        const hour = Math.floor((sys_time / 1000 / 3600) % 24);
        const minute = Math.floor((sys_time / 1000 / 60) % 60);
        const second = Math.floor((sys_time / 1000) % 60);
        setTimeobj({
          days: day,
          hours: hour < 10 ? `0${hour}` : hour,
          minutes: minute < 10 ? `0${minute}` : minute,
          seconds: second < 10 ? `0${second}` : second,
          flag: true,
        });
      } else {
        FinishFn();
        clearInterval(Time);
      }
    }, 1000);
  }, [FinishFn, endtime, timetype]);

  return (
    <>
      {timeobj.flag && (
        <div className={classes}>
          {timeobj.days !== 0 && <div className="countdown-day">{timeobj.days}D</div>}
          {timeobj.days !== 0 && <span>:</span>}
          <div className="countdown-house">{timeobj.hours}h</div>
          <span>:</span>
          <div className="countdown-minute">{timeobj.minutes}m</div>
          {timeobj.days === 0 && <span>:</span>}
          {timeobj.days === 0 && <div className="countdown-seconds">{timeobj.seconds}s</div>}
        </div>
      )}
    </>
  );
};
