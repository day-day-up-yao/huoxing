import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import './index.scss';

import { formatNum } from 'src/utils/public';
import SvgIcon from '../../svg-icon';

const GameDataTop = (props: any) => {
  const { t } = useTranslation();
  const { dailyVolume, dailyTransactions, dailyNumberOfGamers } = props;

  // 模板
  const itemDom = useCallback(
    (item: any, name: any, unit: any) => {
      const lastValue = item ? item['last-value'] : undefined;
      const lastChange = item ? item['last-change'] : undefined;
      const previousValue = item ? item['previous-value'] : undefined;

      return item ? (
        <div className="game-data-top-item">
          <div className="game-data-top-item-top">
            <div className="game-data-top-item-num">
              {unit}
              {formatNum(lastValue.toFixed(0))}
            </div>
            <div className="game-data-top-item-name">{t(name)}</div>
          </div>
          <div className="game-data-top-item-bottom">
            <div
              className={classNames('game-data-top-item-change', {
                fall: lastChange > 0,
                rise: lastChange <= 0,
              })}
            >
              <SvgIcon className="icon" name={lastChange > 0 ? 'pointup' : 'pointdown'} />
              {parseFloat(Math.abs(lastChange * 100).toFixed(3))}%
            </div>
            <div className="game-data-top-item-time">
              {t('overview_daily_previous_value_text', {
                value: `${unit}${formatNum(previousValue.toFixed(0))}`,
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="game-data-top-item" />
      );
    },
    [t]
  );

  // Daily Volume
  const dailyVolumeDom = useMemo(
    () => itemDom(dailyVolume[0], 'overview_daily_volume', '$'),
    [dailyVolume, itemDom]
  );

  // Daily Transactions
  const dailyTransactionsDom = useMemo(
    () => itemDom(dailyTransactions[0], 'overview_daily_transactions', ''),
    [dailyTransactions, itemDom]
  );

  // Daily Number of Gamers
  const dailyNumberOfGamersDom = useMemo(
    () => itemDom(dailyNumberOfGamers[0], 'overview_daily_number_of_gamers', ''),
    [dailyNumberOfGamers, itemDom]
  );

  return (
    <div className="game-data-top">
      {dailyVolumeDom}
      {dailyTransactionsDom}
      {dailyNumberOfGamersDom}
    </div>
  );
};

export default GameDataTop;
