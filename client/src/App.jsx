import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import Home from './pages/Home';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AppLayout from './pages/AppLayout';
import Job from './pages/Job';
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
import JobsAll from './features/jobs/JobsAll';
import SearchJobs from './features/jobs/SearchJobs';
import SearchUsers from './features/users/SearchUsers';

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
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/search',
            element: <Search />,
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
            path: '/notifications',
            element: <Job />,
          },
          {
            path: '/me',
            element: <Profile />,
          },
          {
            path: '/job/:id',
            element: <Job />,
          },
          {
            path: '/jobs',
            element: <Job />,
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
      <ReactQueryDevtools />
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster
        position='bottom-center'
        richColors
        closeButton
      />
    </QueryClientProvider>
  );
};

export default App;
