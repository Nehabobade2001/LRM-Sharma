import { Helmet } from 'react-helmet-async';
import ContentManagementView from 'src/sections/admin/content-management/view/content-management';

// ----------------------------------------------------------------------

export default function ContentManagement() {
  return (
    <>
      <Helmet>
        <title> LRM | Management </title>
      </Helmet>

      <ContentManagementView />
    </>
  );
}
