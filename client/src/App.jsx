import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import Job from './pages/Job';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './pages/Search';
import Profile from './pages/Profile';
// import SignUp from './pages/SignUp';
// import Login from './pages/Login';
// import AuthForm from './pages/AuthForm';
import ConfirmEmail from './features/auth/ConfirmEmailPopup';
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
        gutter={10}
        toastOptions={{
          duration: 4000,
          style: {
            background: 'black',
            color: 'white',
            minWidth: '250px',
            padding: '.75rem 1rem',
            fontSize: '1rem',
            fontWeight: '500',
          },
        }}
      />
    </QueryClientProvider>
  );
};

export default App;
