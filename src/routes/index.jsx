import { createBrowserRouter } from 'react-router-dom';
import loadable from '@loadable/component';

const HomeLayout = loadable(() => import('layouts/HomeLayout'));
const Test = loadable(() => import('pages/Test/Test'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: 'test',
    element: <Test />,
  },
]);

export default router;
