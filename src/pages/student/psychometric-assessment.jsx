import { Helmet } from 'react-helmet-async';
import { PsychometricAssessmentView } from 'src/sections/student/psychometric-assessment/view';

// ----------------------------------------------------------------------

export default function PsychometricAssessmentPage() {
  return (
    <>
      <Helmet>
        <title> LRM |Assessment </title>
      </Helmet>

      <PsychometricAssessmentView />
    </>
  );
}
