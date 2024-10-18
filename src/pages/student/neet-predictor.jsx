import { Helmet } from 'react-helmet-async';
import { NeetPredictorView } from 'src/sections/student/neetPredictor/view';

// ----------------------------------------------------------------------

export default function NeetPredictorPage() {
  return (
    <>
      <Helmet>
        <title> LRM | Document </title>
      </Helmet>

      <NeetPredictorView />
    </>
  );
}
