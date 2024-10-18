 import { lazy } from 'react';

 export const IndexPage = lazy(() => import('src/pages/common/app'));
export const BlogPage = lazy(() => import('src/pages/other/blog'));
export const UserPage = lazy(() => import('src/pages/other/user'));
export const Page404 = lazy(() => import('src/pages/common/page-not-found'));
export const ProductsPage = lazy(() => import('src/pages/other/products'));
export const ProfilePage = lazy(() => import('src/pages/common/profile'));

// auth imports
export const LoginPage = lazy(() => import('src/pages/auth/login'));
export const RegisterPage = lazy(() => import('src/pages/auth/register'));

// student imports
// export const DocumentManagement2 = lazy(()=> import('src/pages/student/document-management'))
export const NeetPage = lazy(() => import('src/pages/student/neet-predictor'));
export const PsychometricPage = lazy(() => import('src/pages/student/psychometric-assessment'));
export const CourseInfoPage = lazy(() => import('src/pages/student/course-information'));
export const CounsellorInteractPage = lazy(() => import('src/pages/student/counsellor-interaction'));
export const AdmissionTrackerPage = lazy(() => import('src/pages/student/admission-tracker'));



// admin imports
export const DocumentManagement = lazy(()=> import('src/pages/admin/document-management'))
export const DetailPage = lazy(()=> import(`src/pages/admin/detail-page`))
export const UserManagement = lazy(() => import('src/pages/admin/user-management'))
export const ContentManagement = lazy(() => import('src/pages/admin/content-management'))
export const AssessmentToolSetting = lazy(() => import('src/pages/admin/assessment-tool-setting'))
export const ReportsAnalytics = lazy(() => import('src/pages/admin/reports-analytics'))
export const Notifications = lazy(() => import('src/pages/admin/notifications'))
export const Blogs = lazy(() => import('src/pages/admin/blogs'))

// counsellor imports
export const StudentProfiles = lazy(() => import('src/pages/counsellor/student-profile'))
export const AdmissionGuidance = lazy(() => import('src/pages/counsellor/admission-guidance'))
export const NEETPredictorToolInfo = lazy(() => import('src/pages/counsellor/neet-predictor-info'))
export const PsychometricAssessmentInfo = lazy(() => import('src/pages/counsellor/psychometric-assessment-info'))
export const StudentTracking = lazy(() => import('src/pages/counsellor/student-tracking'))
export const CounsellorReports = lazy(() => import('src/pages/counsellor/counsellor-reports'))

// manager imports
export const StaffManagement = lazy(() => import('src/pages/manager/staff-management'))
export const ManagerReports = lazy(() => import('src/pages/manager/manager-reports'))
export const StudentIntake = lazy(() => import('src/pages/manager/student-intake'))



// Mapping paths to lazy-loaded components
export const routesConfig = {
  // common routes
  '/dashboard': IndexPage,
  '/profile': ProfilePage,
  '/users': UserPage,
  '/products': ProductsPage,

  // user routes
  // '/legal/doc-management':DocumentManagement2,
  // '/student/psychometric-assessment': PsychometricPage,
  // '/student/course-information': CourseInfoPage,
  // '/student/counsellor-interaction': CounsellorInteractPage,
  // '/student/admission-tracker': AdmissionTrackerPage,

  // admin routes
  '/admin/user-management': UserManagement,
  '/admin/doc-management':DocumentManagement,
  '/admin/content-management': ContentManagement,
  '/admin/view-records/:id': AssessmentToolSetting,
  '/admin/upload-record':ProfilePage,
  '/admin/reports-analytics': ReportsAnalytics,
  '/admin/notifications': Notifications,
  '/admin/blogs': Blogs,
  '/admin/detail-page':DetailPage,

  // counsellor routes
  '/counsellor/student-profile': StudentProfiles,
  '/counsellor/admission-guidance' : AdmissionGuidance,
  '/counsellor/neet-predictor-tool': NEETPredictorToolInfo,
  '/counsellor/psychometric-assessment': PsychometricAssessmentInfo,
  '/counsellor/student-tracking': StudentTracking,
  '/counsellor/reports': CounsellorReports,

  // manager routes
  '/manager/staff-management': StaffManagement,
  '/manager/reports-analytics': ManagerReports,
  '/manager/student-intake': StudentIntake
};
