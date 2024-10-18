import { Helmet } from 'react-helmet-async';
import { ManagerDashboardView } from 'src/sections/manager/managerDashboard/view';

// ----------------------------------------------------------------------

export default function ManagerDashboard() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Manager Dashboard</title>
      </Helmet>

      <ManagerDashboardView />
    </>
  );
}
