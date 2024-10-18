import { Helmet } from 'react-helmet-async';
import { BlogsView } from 'src/sections/admin/blogs/view';

// ----------------------------------------------------------------------

export default function Blogs() {
  return (
    <>
      <Helmet>
        <title> LRM |subject </title>
      </Helmet>

      <BlogsView />
    </>
  );
}
