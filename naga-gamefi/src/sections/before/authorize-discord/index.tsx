import React, { useEffect, useRef, useState } from 'react';

import WaitingLoading from 'src/components/before/waiting-loading';
import { ConnectDiscord } from 'src/utils/public/discord';
import { queryParam } from 'src/utils/public';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { useUserPopup } from 'src/fetchs/store';

export default () => {
  const { linkTo } = useLink();
  const [loading, setLoading] = useState(false);
  // Twitter 返回地址栏参数处理
  const { mutate: mutateUserPopup } = useUserPopup();
  const isOpen = useRef(0);
  useEffect(() => {
    if (queryParam('code') && isOpen.current === 0) {
      isOpen.current = 1;
      setLoading(true);
      ConnectDiscord(mutateUserPopup, linkTo);
    }
    if (queryParam('error')) {
      window.location.href = paths.home;
    }
  }, [linkTo, mutateUserPopup]);
  return (
    <div>
      {loading && (
        <WaitingLoading
          closeloading={() => {
            setLoading(false);
          }}
        />
      )}
    </div>
  );
};
