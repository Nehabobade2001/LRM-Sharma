import { Helmet } from 'react-helmet-async';
import { PsychometricAssessmentInfoView } from 'src/sections/counsellor/psychometric-assessment-info/view';

// ----------------------------------------------------------------------

export default function PsychometricAssessmentInfo() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Psychometric Assessment Info </title>
      </Helmet>

      <PsychometricAssessmentInfoView />
    </>
  );
}
