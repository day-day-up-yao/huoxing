import React, { useState, useEffect } from 'react';
import { Dropdown } from 'rsuite';
import { useTranslation } from 'react-i18next';

import './index.scss';

import SvgIcon from 'src/components/svg-icon';

export default (props: any) => {
  const { t } = useTranslation();
  const { itemlist, mtitle, selectClick, isreward } = props;
  const [updown, setUpdown] = useState('close');
  const [dropname, setDropname] = useState(mtitle);
  useEffect(() => {
    setDropname(mtitle);
  }, [mtitle]);
  return (
    <div className="task-list-screen">
      <Dropdown
        renderToggle={(propsItem: any, ref) => (
          <button className="task-list-screen-drop" {...propsItem} ref={ref} type="button">
            <span>{t(dropname)}</span>
            {updown === 'close' ? <SvgIcon name="pointdown" /> : <SvgIcon name="pointup" />}
          </button>
        )}
        menuStyle={{ width: '150px', top: '110%' }}
        onOpen={() => {
          setUpdown('open');
        }}
        onClose={() => {
          setUpdown('close');
        }}
      >
        {itemlist.map((item: any, index: number) => (
          <Dropdown.Item
            key={index}
            onClick={() => {
              if (isreward && item.type === -1) {
                setDropname(t('quest_rewards_type'));
              } else {
                setDropname(item.name);
              }
              selectClick(item.type);
            }}
          >
            {t(item.name)}
          </Dropdown.Item>
        ))}
      </Dropdown>
    </div>
  );
};
