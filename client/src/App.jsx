import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Suspense, lazy } from 'react';

import AppLayout from './pages/AppLayout';
import AuthLayout from './pages/AuthLayout';
import ProtectedRoutes from './features/auth/ProtectedRoutes';
import ProfileSaved from './features/users/ProfileSaved';
import ProfileInfo from './features/users/ProfileInfo';
import FullScreenLoader from './components/FullScreenLoader';
import MyArticlesDraft from './features/articles/MyArticlesDraft';
import MyArticlesPublic from './features/articles/MyArticlesPublic';
import { AccountVerification } from './features/auth/AccountVerification';
import { AuthProvider } from './context/AuthContext.jsx';

const Home = lazy(() => import('./pages/Home'));
const Search = lazy(() => import('./pages/Search'));
const Profile = lazy(() => import('./pages/Profile'));
const New = lazy(() => import('./pages/New'));
const Apply = lazy(() => import('./pages/Apply'));
const Articles = lazy(() => import('./pages/Articles'));
const NotFound = lazy(() => import('./pages/NotFound'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const ArticlePost = lazy(() => import('./pages/ArticlePost'));
const ErrorPage = lazy(() => import('./pages/ErrorPage'));
const SearchJobs = lazy(() => import('./features/jobs/SearchJobs'));
const SearchUsers = lazy(() => import('./features/users/SearchUsers'));
const JobsAll = lazy(() => import('./features/jobs/JobsAll'));
const JobsRecommended = lazy(() => import('./features/jobs/JobsRecommended'));
const SignupForm = lazy(() => import('./features/auth/SignupForm'));
const LoginForm = lazy(() => import('./features/auth/LoginForm'));
const ResendEmail = lazy(() => import('./features/auth/ResendEmail'));
const ForgotPassword = lazy(() => import('./features/auth/ForgotPassword'));
const ChangePassword = lazy(() => import('./features/auth/ChangePassword'));
const CreateArticle = lazy(() => import('./features/articles/CreateArticle'));
const MyArticles = lazy(() => import('./features/articles/MyArticles'));
const MyJobs = lazy(() => import('./features/jobs/MyJobs'));
const UpdateArticle = lazy(() => import('./features/articles/UpdateArticle'));
const ResetPassword = lazy(() => import('./features/auth/ResetPassword'));

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
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
        path: '/articles',
        element: <Articles />,
      },
      {
        path: '/articles/:id',
        element: <ArticlePost />,
      },
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/new',
            element: <New />,
          },
          {
            path: '/articles/new',
            element: <CreateArticle />,
          },
          {
            element: <Profile />,
            children: [
              {
                path: '/me/information',
                element: <ProfileInfo />,
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
          {
            path: '/me/jobs',
            element: <MyJobs />,
          },
          {
            element: <MyArticles />,
            children: [
              { path: '/me/articles/drafts', element: <MyArticlesDraft /> },
              { path: '/me/articles/published', element: <MyArticlesPublic /> },
            ],
          },
          {
            path: '/me/articles/edit/:id',
            element: <UpdateArticle />,
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
      {
        element: <ProtectedRoutes />,
        children: [
          {
            path: '/change-my-password',
            element: <ChangePassword />,
          },
        ],
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
        <Suspense fallback={<FullScreenLoader />}>
          <RouterProvider router={router} />
        </Suspense>
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
