import React from 'react';
import SvgIcon from 'src/components/svg-icon';

import './index.scss';

export default (props: any) => {
  const { amount, percent } = props;
  return (
    <object>
      <div className="amount-rise">
        {amount && <div className="amount">{amount}</div>}
        {!percent ? (
          <span>--</span>
        ) : (
          <div className={`rise ${Number(percent) < 0 && 'fall'}`}>
            {/* {Number(percent) < 0 ? '' : '+'} */}
            <SvgIcon
              isGreen={Number(percent) > 0}
              isRed={Number(percent) < 0}
              name={Number(percent) > 0 ? 'pointup' : 'pointdown'}
            />
            <span>
              {(Number(percent >= 0 ? percent : percent.toString().replace('-', '')) * 100).toFixed(
                2
              )}
              %
            </span>
          </div>
        )}
      </div>
    </object>
  );
};
