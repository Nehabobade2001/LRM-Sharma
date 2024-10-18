import { Helmet } from 'react-helmet-async';
import { AdmissionTrackerView } from 'src/sections/student/admission-tracker/view';

// ----------------------------------------------------------------------

export default function AdmissionTrackerPage() {
  return (
    <>
      <Helmet>
        <title> LRM | doc </title>
      </Helmet>

      <AdmissionTrackerView />
    </>
  );
}
