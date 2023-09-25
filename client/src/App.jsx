import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import AppLayout from './pages/AppLayout';
import Job from './pages/Job';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Search from './pages/Search';
import Profile from './pages/Profile';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

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
    element: <SignUp />,
    path: '/signup',
  },
  {
    element: <Login />,
    path: '/login',
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
