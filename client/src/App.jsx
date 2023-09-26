import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
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

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/search',
        element: <Search />,
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
      <RouterProvider router={router} />
      <Toaster
        position='bottom-center'
        containerStyle={{ margin: '2px' }}
        gutter={12}
        toastOptions={{
          duration: 4000,
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'black',
            fontWeight: '500',
            color: 'white',
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
