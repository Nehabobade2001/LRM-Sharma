import { Helmet } from 'react-helmet-async';
import NotificationView from 'src/sections/admin/notifications/view/notifications';
import ReportsAnalyticsView from 'src/sections/admin/reports-analytics/view/reports-analytics';

// ----------------------------------------------------------------------

export default function ReportsAnalytics() {
  return (
    <>
      <Helmet>
        <title> LRM | Reports </title>
      </Helmet>

      <ReportsAnalyticsView />
    </>
  );
}
