import { Helmet } from 'react-helmet-async';
import UserDetailView from 'src/sections/admin/UserDetail/view/user-detail';

// ----------------------------------------------------------------------

export default function UserManagement() {
  return (
    <>
      <Helmet>
        <title>LRM | User Management </title>
      </Helmet>

      <UserDetailView/>
    </>
  );
}
