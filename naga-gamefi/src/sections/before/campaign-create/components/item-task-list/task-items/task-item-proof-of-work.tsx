import React, { useState } from 'react';
import { Button, Input, InputGroup } from 'rsuite';

import './index.scss';
import classNames from 'classnames';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemProofOfWork = (props: any) => {
  const { item, data, t, handleInputChange } = props;

  // 状态切换 URL: 2，Image: 1
  const [state, setState] = useState(item.param2 || 2);

  const inputProps = useInputProps({
    item,
    handleInputChange: (data) => handleInputChange({ ...data, param2: state }),
  });

  const onBtnStateChange = (stateIn: any) => {
    setState(stateIn);
    handleInputChange({ ...item, param2: stateIn });
  };

  return (
    <div className="campaign-create-item-task-item-content">
      <div className="item-title" style={{ marginTop: '0' }}>
        {t(data?.title)}
      </div>
      <InputGroup className="input-group" inside>
        <Input
          className="textarea more"
          as="textarea"
          spellCheck="false"
          placeholder={t(data?.placeholder)}
          maxLength={500}
          {...inputProps}
        />
        <InputGroup.Addon className="textarea-num-box">
          {item.param1 ? item.param1.length : 0}/500
        </InputGroup.Addon>
      </InputGroup>
      <div className="item-bottom-btn-box">
        <Button
          className={classNames('btn', { active: state === 2 })}
          onClick={() => onBtnStateChange(2)}
        >
          URL
        </Button>
        <Button
          className={classNames('btn', { active: state === 1 })}
          onClick={() => onBtnStateChange(1)}
        >
          Image
        </Button>
      </div>
    </div>
  );
};

export default CampaignCreateItemTaskItemProofOfWork;
