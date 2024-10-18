import { Helmet } from 'react-helmet-async';
import { StudentTrackingView } from 'src/sections/counsellor/student-tracking/view';

// ----------------------------------------------------------------------

export default function StudentTracking() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Student Tracking </title>
      </Helmet>

      <StudentTrackingView />
    </>
  );
}
