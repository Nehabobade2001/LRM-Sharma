import { Helmet } from 'react-helmet-async';
import DetailPageView from 'src/sections/admin/DetailPage/view/detail-page';

// ----------------------------------------------------------------------

export default function UserManagement() {
  return (
    <>
      <Helmet>
        <title>LRM | Detail Page</title>
      </Helmet>

      <DetailPageView />
    </>
  );
}
