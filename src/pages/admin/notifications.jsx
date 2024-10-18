import { Helmet } from 'react-helmet-async';
import NotificationView from 'src/sections/admin/notifications/view/notifications';

// ----------------------------------------------------------------------

export default function Notifications() {
  return (
    <>
      <Helmet>
        <title> LRM | Notifications </title>
      </Helmet>

      <NotificationView />
    </>
  );
}
