import { Helmet } from 'react-helmet-async';
import { AdmissionGuidanceView } from 'src/sections/counsellor/admission-guidance/view';
import { StudentProfiles } from 'src/sections/counsellor/student-profiles/view';

// ----------------------------------------------------------------------

export default function StudentProfile() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Student Profile </title>
      </Helmet>

      <StudentProfiles />
    </>
  );
}
