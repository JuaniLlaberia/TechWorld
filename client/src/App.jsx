import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './pages/Search';
import Profile from './pages/Profile';

import AuthLayout from './pages/AuthLayout';
import { LoginForm } from './features/auth/LoginForm';
import { SignupForm } from './features/auth/SignupForm';
import { ForgotPassword } from './features/auth/ForgotPassword';
import { ResetPassword } from './features/auth/ResetPassword';
import { AccountVerification } from './features/auth/AccountVerification';
import { ResendEmail } from './features/auth/ResendEmail';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import { NotFound } from './pages/NotFound';
import { AuthProvider } from './context/AuthContext.jsx';
import SearchJobs from './features/jobs/SearchJobs';
import SearchUsers from './features/users/SearchUsers';
import { UserProfile } from './pages/UserProfile';
import New from './pages/New';
import ProfilePosts from './features/users/ProfilePosts';
import ProfileSaved from './features/users/ProfileSaved';
import ProfileInfo from './features/users/ProfileInfo';
import Apply from './pages/Apply';
import JobsAll from './features/jobs/JobsAll';
import JobsRecommended from './features/jobs/JobsRecommended';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/jobs/all',
        element: <JobsAll />,
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/new',
            element: <New />,
          },
          {
            element: <Profile />,
            children: [
              {
                path: '/me/information',
                element: <ProfileInfo />,
              },
              {
                path: '/me/my-jobs',
                element: <ProfilePosts />,
              },
              { path: '/me/saved', element: <ProfileSaved /> },
            ],
          },
          {
            path: '/jobs-search',
            element: <SearchJobs />,
          },
          {
            path: '/users-search',
            element: <SearchUsers />,
          },
          {
            path: '/jobs',
            element: <JobsRecommended />,
          },
          {
            path: '/apply/:jobId',
            element: <Apply />,
          },
          {
            path: '/user/:id',
            element: <UserProfile />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        element: <SignupForm />,
        path: '/signup',
      },
      {
        element: <LoginForm />,
        path: '/login',
      },
      {
        element: <AccountVerification />,
        path: '/verify-email/:token',
      },
      {
        element: <ResendEmail />,
        path: '/resend-verification',
      },
      {
        element: <ForgotPassword />,
        path: '/forgot-password',
      },
      {
        element: <ResetPassword />,
        path: '/reset-password/:token',
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
        <Toaster
          position='bottom-right'
          toastOptions={{
            style: {
              height: '70px',
              fontSize: '1rem',
            },
          }}
          richColors
          closeButton
        />
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
