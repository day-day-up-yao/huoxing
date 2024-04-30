import React, { useContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';

import { Context } from '../../context';

import './index.scss';

export default (props: any) => {
  const { title } = props;
  const { closePopup, pageflag } = useContext(Context);
  return (
    <div className="titileandclose">
      <div className="title">{title}</div>
      {!pageflag && (
        <div className="use-close" onClick={closePopup}>
          <CloseIcon />
        </div>
      )}
    </div>
  );
};
