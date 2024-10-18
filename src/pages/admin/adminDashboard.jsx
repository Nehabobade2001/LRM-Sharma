import { Helmet } from 'react-helmet-async';
import { AdminDashboardView } from 'src/sections/admin/adminDashboard/view';

// ----------------------------------------------------------------------

export default function AdminDashboard() {
  return (
    <>
      <Helmet>
        <title> LRM | Admin Dashboard</title>
      </Helmet>

      <AdminDashboardView />
    </>
  );
}
