import { Helmet } from 'react-helmet-async';
import { StudentIntakeView } from 'src/sections/manager/student-intake/view';

// ----------------------------------------------------------------------

export default function StudentIntake() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Student Intake </title>
      </Helmet>

      <StudentIntakeView />
    </>
  );
}
