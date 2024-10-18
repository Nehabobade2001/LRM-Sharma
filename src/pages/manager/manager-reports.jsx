import { Helmet } from 'react-helmet-async';
import { ManagerReportsView } from 'src/sections/manager/manager-reports/view';

// ----------------------------------------------------------------------

export default function ManagerReports() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Reports </title>
      </Helmet>

      <ManagerReportsView />
    </>
  );
}
