import React from 'react';

import ContextNotifications from './context';
import NotificationsPopover from './notifications-popover';

const NotificationsMain = () => (
  <ContextNotifications>
    <NotificationsPopover />
  </ContextNotifications>
);

export default NotificationsMain;
