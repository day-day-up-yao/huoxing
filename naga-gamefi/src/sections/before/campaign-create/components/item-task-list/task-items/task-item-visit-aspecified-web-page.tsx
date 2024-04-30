import React from 'react';
import { Input, InputGroup } from 'rsuite';

import './index.scss';
import { useInputProps } from '../../public';

const CampaignCreateItemTaskItemVisitASpecifiedWebPage = (props: any) => {
  const { item, data, t, handleInputChange } = props;

  const inputProps = useInputProps({ item, handleInputChange });
  const inputProps2 = useInputProps({ item, handleInputChange, paramName: 'param2' });
  const inputProps3 = useInputProps({ item, handleInputChange, paramName: 'param3' });

  return (
    <div className="campaign-create-item-task-item-content">
      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text1)}</InputGroup.Addon>
        <Input className="input" placeholder={t(data?.placeholder1)} {...inputProps} />
      </InputGroup>
      <div className="item-title">{t(data?.text2)}</div>
      <InputGroup className="input-group" inside>
        <Input
          className="textarea"
          as="textarea"
          spellCheck="false"
          placeholder={t(data?.placeholder2)}
          maxLength={200}
          {...inputProps2}
        />
        <InputGroup.Addon className="textarea-num-box">
          {item.param2 ? item.param2.length : 0}/200
        </InputGroup.Addon>
      </InputGroup>
      <InputGroup className="input-group" style={{ marginTop: '20px' }}>
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text3)}</InputGroup.Addon>
        <Input className="input" placeholder="https://" {...inputProps3} />
      </InputGroup>
    </div>
  );
};

export default CampaignCreateItemTaskItemVisitASpecifiedWebPage;
