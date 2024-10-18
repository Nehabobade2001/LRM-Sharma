import React, { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from 'src/layouts/dashboard';
import navConfig from 'src/layouts/dashboard/config-navigation';
import { routesConfig } from 'src/layouts/dashboard/routesConfig';

export const IndexPage = lazy(() => import('src/pages/common/app'));
export const BlogPage = lazy(() => import('src/pages/other/blog'));
export const ProfilePage = lazy(() => import('src/pages/common/profile'));
export const NeetPage = lazy(() => import('src/pages/student/neet-predictor'));
export const PsychometricPage = lazy(() => import('src/pages/student/psychometric-assessment'));
export const CourseInfoPage = lazy(() => import('src/pages/student/course-information'));
export const CounsellorInteractPage = lazy(() => import('src/pages/student/counsellor-interaction'));
export const AdmissionTrackerPage = lazy(() => import('src/pages/student/admission-tracker'));
export const UserPage = lazy(() => import('src/pages/other/user'));
export const LoginPage = lazy(() => import('src/pages/auth/login'));
export const RegisterPage = lazy(() => import('src/pages/auth/register'));
export const ProductsPage = lazy(() => import('src/pages/other/products'));
export const DetailPage = lazy(() => import('src/pages/admin/detail-page'));
export const Page404 = lazy(() => import('src/pages/common/page-not-found'));
export const AssessmentToolSetting = lazy(() => import('../pages/admin/assessment-tool-setting'))
export const UserDetail = lazy(() => import('../pages/admin/user-detail'))
// ----------------------------------------------------------------------

export default function Router() {
  const role = useSelector((state) => state.user.user?.role); 
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const userRoutes = navConfig(role);

  const routes = useRoutes([
    {
      element: isAuthenticated ? (
        <DashboardLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ) : (
        <Navigate to="/login" replace />
      ),
     children: [
      { element: <IndexPage />, index: true },
        ...userRoutes.map((route) => ({
          path: route.path,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              {React.createElement(routesConfig[route.path] || Page404)}
            </Suspense>
          ),
        })),
        {
          path: '/admin/view-records/:id',  // Add your dynamic route here
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <AssessmentToolSetting />  
            </Suspense>
          ),
        },
        {
          path: '/admin/user-details/:id',  // Add your dynamic route here
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <UserDetail />  
            </Suspense>
          ),
        },
        {
          path: '/admin/upload-record',  // Add your dynamic route here
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <ProfilePage/>  
            </Suspense>
          ),
        },
        {
          path: '/admin/detail-page/:id',  // Add your dynamic route here
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <DetailPage/>  
            </Suspense>
          ),
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'register',
      element: <RegisterPage />,
    },
    {
      path: '404',
      element: <Page404 />,
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
