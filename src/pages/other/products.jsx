import { Helmet } from 'react-helmet-async';

import { ProductsView } from 'src/sections/others/products/view';

// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Courses </title>
      </Helmet>

      <ProductsView />
    </>
  );
}
