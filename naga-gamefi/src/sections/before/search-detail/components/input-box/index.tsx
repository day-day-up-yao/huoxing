import React, { useMemo, useContext } from 'react';
import { Input, InputGroup } from 'rsuite';

import SvgIcon from 'src/components/svg-icon';

import './index.scss';

import { Context } from '../../context';

const iconSearch = '/images/icon/icon-search.png';
const iconClose = '/images/icon/btn-close.png';

const SearchDetailInputBox = () => {
  const { t, inputValue, onInputValueChange, onBtnClearValueClick, onKeySearchEnterUp } =
    useContext(Context);

  // 搜索框
  const inputBox = useMemo(
    () => (
      <InputGroup inside className="search-detail-input-box">
        <InputGroup.Addon className="input-icon">
          {/* <img src={iconSearch} alt="" /> */}
          <SvgIcon name="search-2" />
        </InputGroup.Addon>
        <Input
          className="search-detail-input"
          placeholder={t('search_placeholder_input')}
          spellCheck="false"
          value={inputValue}
          onChange={(e) => {
            onInputValueChange(e);
          }}
          onKeyUp={(e) => onKeySearchEnterUp(e)}
        />
        {inputValue !== '' ? (
          <InputGroup.Button className="input-icon" onClick={() => onBtnClearValueClick()}>
            <img src={iconClose} alt="" />
          </InputGroup.Button>
        ) : undefined}
      </InputGroup>
    ),
    [t, inputValue, onInputValueChange, onKeySearchEnterUp, onBtnClearValueClick]
  );

  return inputBox;
};

export default SearchDetailInputBox;
