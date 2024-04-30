import React, { useEffect, useRef, useState } from 'react';

import WaitingLoading from 'src/components/before/waiting-loading';
import { ConnectTwitter } from 'src/utils/public/twitter';
import { queryParam } from 'src/utils/public';
import { useLink } from 'src/components/link';
import { useUserPopup } from 'src/fetchs/store';

export default () => {
  const { linkTo } = useLink();
  const [twitterloading, setTwitterloading] = useState(false);
  // Twitter 返回地址栏参数处理
  const { mutate: mutateUserPopup } = useUserPopup();
  const isOpen = useRef(0);
  useEffect(() => {
    if (queryParam('code') && isOpen.current === 0) {
      isOpen.current = 1;
      setTwitterloading(true);
      ConnectTwitter(mutateUserPopup, linkTo);
    }
  }, [linkTo, mutateUserPopup]);
  return (
    <div>
      {twitterloading && (
        <WaitingLoading
          closeloading={() => {
            setTwitterloading(false);
          }}
        />
      )}
    </div>
  );
};
