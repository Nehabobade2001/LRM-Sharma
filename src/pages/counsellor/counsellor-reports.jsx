import { Helmet } from 'react-helmet-async';
import { CounsellorReportsView } from 'src/sections/counsellor/counsellor-reports/view';

// ----------------------------------------------------------------------

export default function CounsellorReports() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Reports </title>
      </Helmet>

      <CounsellorReportsView />
    </>
  );
}
