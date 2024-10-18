import { Helmet } from 'react-helmet-async';
import { CounsellorInteractionView } from 'src/sections/student/counsellor-interaction/view';

// ----------------------------------------------------------------------

export default function CounsellorInteractionPage() {
  return (
    <>
      <Helmet>
        <title> LRM | mange </title>
      </Helmet>

      <CounsellorInteractionView />
    </>
  );
}
