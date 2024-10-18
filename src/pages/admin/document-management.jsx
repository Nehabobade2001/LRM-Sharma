import { Helmet } from 'react-helmet-async';
import DocumentManagementView from 'src/sections/admin/document-management/view/document-management';

// ----------------------------------------------------------------------

export default function DocumentManagement() {
  return (
    <>
      <Helmet>
        <title>LRM | Document  Management </title>
      </Helmet>

      <DocumentManagementView />
    </>
  );
}
