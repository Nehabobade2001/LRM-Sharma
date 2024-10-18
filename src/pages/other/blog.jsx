import { Helmet } from 'react-helmet-async';

import { BlogView } from 'src/sections/others/blog/view';

// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Blog</title>
      </Helmet>

      <BlogView />
    </>
  );
}
