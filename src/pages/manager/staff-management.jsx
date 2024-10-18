import { Helmet } from 'react-helmet-async';
import { StaffManagementView } from 'src/sections/manager/staff-management/view';

// ----------------------------------------------------------------------

export default function StaffManagement() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Staff Management </title>
      </Helmet>

      <StaffManagementView />
    </>
  );
}
