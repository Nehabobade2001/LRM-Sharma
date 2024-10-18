// import SvgColor from 'src/components/svg-color';

// // ----------------------------------------------------------------------

// const icon = (name) => (
//   <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
// );

// const navConfig = [
//   {
//     title: 'dashboard',
//     path: '/',
//     icon: icon('ic_dashboard2'),
//   },
//   {
//     title: 'profile',
//     path: '/profile',
//     icon: icon('ic_user'),
//   },
//   {
//     title: 'neet rank predictor',
//     path: '/neet-predictor',
//     icon: icon('ic_rank'),
//   },
//   {
//     title: 'psychometric assessment',
//     path: '/psychometric-assessment',
//     icon: icon('ic_test'),
//   },
//   {
//     title: 'course information',
//     path: '/course-information',
//     icon: icon('ic_courses'),
//   },
//   {
//     title: 'counsellor interaction',
//     path: '/counsellor-interaction',
//     icon: icon('ic_counsellor'),
//   },
//   {
//     title: 'Admission Tracker',
//     path: '/admission-tracker',
//     icon: icon('ic_admission'),
//   },
//   // {
//   //   title: 'Not found',
//   //   path: '/404',
//   //   icon: icon('ic_disabled'),
//   // },
// ];

// export default navConfig;

import SvgColor from 'src/components/svg-color';

const icon = (name) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
);

const navConfig = (role) => {
  const commonLinks = [
    { title: 'Dashboard', path: '/', icon: icon('ic_dashboard2') },
    
  ];

  const studentLinks = [
    { title: 'Document Management', path: '/admin/doc-management', icon: icon('ic_user') },
     { title: 'System Notifications', path: '/admin/notifications', icon: icon('ic_blog') },
    // { title: 'Create User', path: '/student/neet-predictor', icon: icon('ic_rank') },
    // { title: 'View Document', path: '/student/psychometric-assessment', icon: icon('ic_test') },
    // { title: 'All User', path: '/student/course-information', icon: icon('ic_courses') },
    // {
    //   title: 'Counsellor Interaction',
    //   path: '/student/counsellor-interaction',
    //   icon: icon('ic_counsellor'),
    // },
    // { title: 'Admission Tracker', path: '/student/admission-tracker', icon: icon('ic_admission') },
  ];

  const adminLinks = [
    { title: 'Document Management', path: '/admin/doc-management', icon: icon('ic_user') },
    { title: 'User Management', path: '/admin/user-management', icon: icon('ic_user') },
    // {
    //   title: 'View Document',
    //   path: '/admin/view-records',
    //   icon: icon('ic_blog'),
    // },
    { title: 'Backup & Restore', path: '/admin/reports-analytics', icon: icon('ic_analytics') },
    { title: 'Reports & Analytics', path: '/admin/notifications', icon: icon('ic_blog') },
    // { title: 'Blogs', path: '/admin/blogs', icon: icon('ic_blog') },
    // { title: 'Content Management', path: '/admin/content-management', icon: icon('ic_analytics') },
    // {
    //   title: 'Content Management',
    //   icon: icon('ic_analytics'),
    //   children: [
    //     { title: 'Create Content', path: '/admin/content-management' },
    //     { title: 'View Content', path: '/admin/content-management/view' },
    //   ],
    // },
  ];

  const counsellorLinks = [
    { title: 'Student Profiles', path: '/counsellor/student-profile', icon: icon('ic_blog') },
    { title: 'Admission Guidance', path: '/counsellor/admission-guidance', icon: icon('ic_blog') },
    {
      title: 'NEET Predictor Tool',
      path: '/counsellor/neet-predictor-tool',
      icon: icon('ic_analytics'),
    },
    {
      title: 'Psychometric Assessment',
      path: '/counsellor/psychometric-assessment',
      icon: icon('ic_test'),
    },
    { title: 'Student Tracking', path: '/counsellor/student-tracking', icon: icon('ic_user') },
    { title: 'Reports', path: '/counsellor/reports', icon: icon('ic_blog') },
  ];

  const managerLinks = [
    { title: 'Staff Management', path: '/manager/staff-management', icon: icon('ic_user') },
    {
      title: 'Reports & Analytics',
      path: '/manager/reports-analytics',
      icon: icon('ic_analytics'),
    },
    { title: 'Student Intake', path: '/manager/student-intake', icon: icon('ic_user') },
  ];

  const organisationLinks = [
    { title: 'Overview', path: '/organisation/overview', icon: icon('ic_organisation') },
  ];

  switch (role) {
    case 'admin':
      return [...commonLinks, ...adminLinks];
    case 'user':
      return [...commonLinks, ...studentLinks];
    case 'counsellor':
      return [...commonLinks, ...counsellorLinks];
    case 'manager':
      return [...commonLinks, ...managerLinks];
    case 'organisation':
      return [...commonLinks, ...organisationLinks];
    default:
      return commonLinks;
  }
};

export default navConfig;

