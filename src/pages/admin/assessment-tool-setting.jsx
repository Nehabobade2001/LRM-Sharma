import { Helmet } from 'react-helmet-async';
import AssessmentToolSettingView from 'src/sections/admin/assessment-tool-setting/view/assessment-tool-setting';

// ----------------------------------------------------------------------

export default function AssessmentToolSetting() {
  return (
    <>
      <Helmet>
        <title> LRM | Document</title>
      </Helmet>

      <AssessmentToolSettingView />
    </>
  );
}
