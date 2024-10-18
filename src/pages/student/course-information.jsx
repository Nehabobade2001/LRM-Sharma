import { Helmet } from 'react-helmet-async';
import { CourseInformationView } from 'src/sections/student/course-information/view';

// ----------------------------------------------------------------------

export default function CourseInformationPage() {
  return (
    <>
      <Helmet>
        <title> LRM | DOC </title>
      </Helmet>

      <CourseInformationView />
    </>
  );
}
