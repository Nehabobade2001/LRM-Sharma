import { Helmet } from 'react-helmet-async';
import { ProfileView } from 'src/sections/common/profile/view';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> LRM | Document </title>
      </Helmet>

      <ProfileView />
    </>
  );
}
