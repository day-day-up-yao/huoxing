import React from 'react';

import ContextNotifications from './context';
import NotificationsDrawer from './notifications-drawer';

const NotificationsMain = () => (
  <ContextNotifications>
    <NotificationsDrawer />
  </ContextNotifications>
);

export default NotificationsMain;
