import { Helmet } from 'react-helmet-async';
import { StudentDashboardView } from 'src/sections/student/studentDashboard/view';

// ----------------------------------------------------------------------

export default function StudentDashboard() {
  return (
    <>
      <Helmet>
        <title> LRM | User</title>
      </Helmet>

      <StudentDashboardView />
    </>
  );
}
