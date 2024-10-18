import { Helmet } from 'react-helmet-async';
import UserManagementView from 'src/sections/admin/user-management/view/user-management';

// ----------------------------------------------------------------------

export default function UserManagement() {
  return (
    <>
      <Helmet>
        <title>LRM | User Management </title>
      </Helmet>

      <UserManagementView />
    </>
  );
}
