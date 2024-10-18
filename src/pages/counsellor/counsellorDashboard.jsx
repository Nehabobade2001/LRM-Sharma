import { Helmet } from 'react-helmet-async';
import { CounsellorDashboardView } from 'src/sections/counsellor/consellorDashboard/view';

// ----------------------------------------------------------------------

export default function CounsellorDashboard() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Counsellor Dashboard</title>
      </Helmet>

      <CounsellorDashboardView />
    </>
  );
}
