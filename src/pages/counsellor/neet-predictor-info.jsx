import { Helmet } from 'react-helmet-async';
import { NeetPredictorInfoView } from 'src/sections/counsellor/neet-predictor-info/view';

// ----------------------------------------------------------------------

export default function NeetPredictorInfo() {
  return (
    <>
      <Helmet>
        <title> MBBS-WALA | Neet Predictor Info </title>
      </Helmet>

      <NeetPredictorInfoView />
    </>
  );
}
