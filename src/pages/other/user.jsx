import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/others/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | User </title>
      </Helmet>

      <UserView />
    </>
  );
}
