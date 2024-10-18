import { Helmet } from 'react-helmet-async';
import { DocumentManagementView } from 'src/sections/student/document-management/view/document-management';

// ----------------------------------------------------------------------

export default function StudentDashboard() {
  return (
    <>
      <Helmet>
        <title> LRM | User</title>
      </Helmet>

      <DocumentManagementView />
    </>
  );
}
