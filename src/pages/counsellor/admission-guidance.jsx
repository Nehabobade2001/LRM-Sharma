import { Helmet } from 'react-helmet-async';
import { AdmissionGuidanceView } from 'src/sections/counsellor/admission-guidance/view';

// ----------------------------------------------------------------------

export default function AdmissionGuidance() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Admission Guidance </title>
      </Helmet>

      <AdmissionGuidanceView />
    </>
  );
}
