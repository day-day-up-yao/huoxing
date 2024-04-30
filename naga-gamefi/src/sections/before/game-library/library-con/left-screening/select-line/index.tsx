import React, { useState, useRef, useEffect } from 'react';
// import axios from 'axios'
// import SelectCode from '../../components/Public/HomeHint'
import './index.scss';

export default (props: any) => {
  const { valnum, minnum, ish5, onMinchange } = props;
  const totalRef = useRef<any>(null);
  // const minRef = useRef(null)
  const [value, setValue] = useState(valnum);
  const [minval, setMinval] = useState(minnum);
  useEffect(() => {
    setValue(valnum);
  }, [valnum]);
  useEffect(() => {
    setMinval(minnum);
  }, [minnum]);
  return (
    <div className="pregress-line">
      <div ref={totalRef} className="pregress-line-bg">
        <div className="pregress-line-con" style={{ width: `${value * 100}%` }} />
      </div>
      <div className="min-left" style={{ width: `${minval * 100}%` }} />
      {ish5 ? (
        <div
          className="pregress-line-leftbtn"
          onTouchStart={(e) => {
            const { offsetWidth } = totalRef.current;
            const stop = e.currentTarget;
            // console.log(e.currentTarget)
            const { offsetLeft } = stop;
            stop.style.left = `${offsetLeft}px`;
            const start = e.touches['0'].pageX;
            const move = (event: any) => {
              let val = offsetLeft + event.touches['0'].pageX - start;
              if (val <= 0) val = 0;
              if (val >= value * offsetWidth) val = value * offsetWidth;
              if (val >= offsetWidth) val = offsetWidth;
              setMinval((val / offsetWidth).toFixed(2));
              // stop.style['left'] = val + 'px'
              onMinchange((val / offsetWidth).toFixed(2));
            };
            const clear = () => {
              document.removeEventListener('touchmove', move);
              document.removeEventListener('mouseup', clear);
              document.removeEventListener('touchend', clear);
            };
            document.addEventListener('touchmove', move);
            document.addEventListener('mouseup', clear);
            document.addEventListener('touchend', clear);
          }}
          style={{ left: `${minval * 100 - 3}%` }}
        >
          <div className="pregress-line-btn-pop">
            <div className="btn-pop-num" />
          </div>
        </div>
      ) : (
        <div
          className="pregress-line-leftbtn"
          onMouseDown={(e) => {
            const { offsetWidth } = totalRef.current;
            const stop = e.currentTarget;
            // console.log(e.currentTarget)
            const { offsetLeft } = stop;
            // console.log(offsetLeft)
            stop.style.left = `${offsetLeft}px`;
            const { pageX: start } = e;
            const move = (event: any) => {
              let val = offsetLeft + event.pageX - start;
              if (val <= 0) val = 0;
              if (val >= value * offsetWidth) val = value * offsetWidth;
              if (val >= offsetWidth) val = offsetWidth;
              setMinval((val / offsetWidth).toFixed(2));
              // console.log(val, offsetWidth, 1111)
              // stop.style['left'] = val + 'px'
              onMinchange((val / offsetWidth).toFixed(2));
              // console.log(val)
            };

            const clear = () => {
              document.removeEventListener('mousemove', move);
              document.removeEventListener('mouseup', clear);
              document.removeEventListener('mouseleave', clear);
            };
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', clear);
            document.addEventListener('mouseleave', clear);
          }}
          style={{ left: `${minval * 100 - 2}%` }}
        >
          {/* <div className="pregress-line-btn-pop">
                    <div className="btn-pop-num">{Number(allnum * minval).toFixed(1)}</div>
                </div> */}
        </div>
      )}
    </div>
  );
};
